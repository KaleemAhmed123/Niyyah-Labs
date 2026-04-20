type SalesforceTokenResponse = {
  access_token: string;
  instance_url?: string;
  token_type?: string;
  issued_at?: string;
  signature?: string;
};

type SalesforceLeadPayload = {
  FirstName?: string;
  LastName: string;
  Email?: string;
  Phone?: string;
  Company: string;
  LeadSource?: string;
  Description?: string;
};

type CachedSalesforceAuth = {
  accessToken: string;
  instanceUrl: string;
  expiresAt: number;
};

let cachedSfAuth: CachedSalesforceAuth | null = null;
let tokenExpiresAt: number | null = null;

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

async function getSfToken() {
  const now = Date.now();

  if (cachedSfAuth && tokenExpiresAt && now < tokenExpiresAt) {
    return cachedSfAuth;
  }

  const sfDomainUrl = getRequiredEnv("SF_DOMAIN_URL");
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", getRequiredEnv("SF_CLIENT_ID"));
  params.append("client_secret", getRequiredEnv("SF_CLIENT_SECRET"));

  const response = await fetch(`${sfDomainUrl}/services/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Salesforce token error:", responseBody);
    throw new Error(`Failed to fetch Salesforce token: ${response.status}`);
  }

  const data = responseBody as SalesforceTokenResponse;

  if (!data.access_token) {
    throw new Error("Salesforce token response did not include access_token");
  }

  cachedSfAuth = {
    accessToken: data.access_token,
    instanceUrl: data.instance_url || sfDomainUrl,
    expiresAt: Date.now() + 30 * 60 * 1000,
  };
  tokenExpiresAt = Date.now() + 30 * 60 * 1000;

  return cachedSfAuth;
}

export async function sendToSalesforce<TPayload extends object>(
  endpoint: string,
  payload: TPayload
) {
  const auth = await getSfToken();
  const sfApiVersion = process.env.SF_API_VERSION || "v60.0";
  const url = `${auth.instanceUrl}/services/data/${sfApiVersion}${endpoint}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Salesforce API error:", responseBody);
    throw new Error(
      `Salesforce API error: ${response.status} ${JSON.stringify(responseBody)}`
    );
  }

  return responseBody;
}

export async function createSalesforceLead(payload: SalesforceLeadPayload) {
  return sendToSalesforce("/sobjects/Lead", payload);
}
