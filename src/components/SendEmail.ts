import { Resend } from "resend"
import { redirect } from "next/navigation"

// EMAIL SENDGING FUCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const resend = new Resend(process.env.RESEND_API_KEY)
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message")
  const name = formdata.get("name")
  if (!message) {
    return {
      error: "Invalid message",
    }
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `hs883532@gmail.com`,
    subject: `${name} Contact Form.`,
    text: `${message}`,
  })

  return redirect("/")
}
