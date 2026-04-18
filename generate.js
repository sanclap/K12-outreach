export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // ✅ working free model
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300
      })
    });

    const data = await response.json();
    console.log("Groq response:", data);

    if (data.error) {
      return res.status(500).json({
        text: data.error.message || "Groq API error"
      });
    }

    return res.status(200).json({
      text: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      text: "Server error"
    });
  }
}