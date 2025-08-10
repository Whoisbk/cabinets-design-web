import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      )
    }

    const apiKey = process.env.MAILCHIMP_API_KEY
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX

    if (!apiKey || !audienceId || !serverPrefix) {
      return NextResponse.json(
        {
          error:
            "Server is not configured. Missing MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, or MAILCHIMP_SERVER_PREFIX.",
        },
        { status: 500 }
      )
    }

    const normalizedEmail = String(email).toLowerCase()
    const subscriberHash = crypto
      .createHash("md5")
      .update(normalizedEmail)
      .digest("hex")

    const endpoint = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`

    const payload = {
      email_address: normalizedEmail,
      status_if_new: "subscribed",
      status: "subscribed",
    }

    const authHeader = Buffer.from(`anystring:${apiKey}`).toString("base64")

    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authHeader}`,
      },
      body: JSON.stringify(payload),
      // Disable Next.js fetch caching for API proxying
      cache: "no-store",
    })

    const responseJson = await response.json().catch(() => undefined)

    if (!response.ok) {
      const detail = responseJson?.detail || "Failed to subscribe email."
      return NextResponse.json({ error: detail }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json(
      { error: "Unexpected server error. Please try again later." },
      { status: 500 }
    )
  }
}