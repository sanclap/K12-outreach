export default async function handler(req, res) {
  const { to, subject, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // default test sender
        to: [to],
        subject: subject,
        html: `<div style="white-space: pre-line; font-family: sans-serif;">${message}</div>`
      })
    });

    const data = await response.json();
    console.log("Resend response:", data);

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Send email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}