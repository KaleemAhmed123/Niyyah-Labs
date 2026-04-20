import { NextResponse } from "next/server";
import { createSalesforceLead } from "@/utils/salesforce";

type LeadRequest = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  scope?: string;
  timeline?: string;
  budget?: string;
  challenge?: string;
  brief?: string;
};

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);

  if (parts.length <= 1) {
    return {
      firstName: "",
      lastName: parts[0] || "Website Lead",
    };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) || "Website Lead",
  };
}

function validateLead(body: LeadRequest) {
  const errors: string[] = [];

  if (!body.name?.trim()) errors.push("name is required");
  if (!body.email?.trim()) errors.push("email is required");
  if (!body.phone?.trim()) errors.push("phone is required");
  if (!body.scope?.trim()) errors.push("scope is required");
  if (!body.challenge?.trim()) errors.push("challenge is required");

  return errors;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadRequest;
    const errors = validateLead(body);

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid lead payload: ${errors.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const { firstName, lastName } = splitName(body.name || "");
    const description = [
      body.brief || "",
      "",
      "Structured fields:",
      `Scope: ${body.scope || "Not provided"}`,
      `Timeline: ${body.timeline || "Not provided"}`,
      `Budget: ${body.budget || "Not provided"}`,
      `Phone: ${body.phone || "Not provided"}`,
      `Challenge: ${body.challenge || "Not provided"}`,
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      FirstName: firstName || undefined,
      LastName: lastName,
      Email: body.email,
      Phone: body.phone,
      Company: body.company?.trim() || "Not Provided",
      LeadSource: "Web Site",
      Description: description.slice(0, 32000),
    };

    const sfResponse = await createSalesforceLead(payload);

    return NextResponse.json(
      {
        success: true,
        data: sfResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown lead creation error";

    console.error("Lead creation error:", error);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}
