export default async function handler(req, res) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({ error: "YOUTUBE_API_KEY not set" });
  }

  const searchQueries = [
  "india math olympiad class students",
  "cbse science class india teacher",
  "primary math india kids class",
  "ncert india education teacher",
  "india gk quiz students olympiad",
  "india english grammar class teacher",
  "hindi medium teacher india class",
  "india physics chemistry biology class",
  "india social science history geography class",
  "vedic math abacus india kids",
  "india board exam preparation class 10",
  "india class 6 7 8 science math",
  "india montessori primary education kids",
  "india stem robotics coding kids class",
  "india competitive exam ntse olympiad prep",
  ];

  try {
    const allChannels = [];

    for (const query of searchQueries) {
      const searchRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=channel&regionCode=IN&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      const searchData = await searchRes.json();
      if (!searchData.items) continue;

      const channelIds = searchData.items.map(i => i.id.channelId).join(",");
      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelIds}&key=${YOUTUBE_API_KEY}`
      );
      const statsData = await statsRes.json();
      if (!statsData.items) continue;

      statsData.items.forEach(channel => {
        const subs = parseInt(channel.statistics.subscriberCount || 0);
        if (subs < 5000 || subs > 100000) return;

        const views = parseInt(channel.statistics.viewCount || 0);
        const videos = parseInt(channel.statistics.videoCount || 1);
        const avgViews = views / videos;
        const engRate = ((avgViews / subs) * 100).toFixed(1) + "%";
        const followersFormatted = (subs / 1000).toFixed(0) + "K";

        const desc = channel.snippet.description || "";
        const emailMatch = desc.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);

        allChannels.push({
          id: channel.id,
          name: channel.snippet.title,
          handle: `@${channel.snippet.customUrl || channel.id}`,
          platform: "YouTube",
          followers: followersFormatted,
          engagementRate: engRate,
          niche: "Education",
          subjects: detectSubjects(channel.snippet.title + " " + desc),
          segment: detectSegment(channel.snippet.title + " " + desc),
          email: emailMatch ? emailMatch[0] : "contact@" + channel.snippet.title.toLowerCase().replace(/\s+/g, "") + ".com",
          profileLink: `https://youtube.com/channel/${channel.id}`,
          contentThemes: desc.substring(0, 100) || "Educational content",
          tone: "Educational",
          recentContent: desc.substring(0, 60) || "Latest educational content",
          location: "India",
          brandFit: calculateBrandFit(subs, parseFloat(engRate)),
        });
      });
    }

    const unique = allChannels.filter(
      (v, i, a) => a.findIndex(t => t.id === v.id) === i
    );

    res.status(200).json({ influencers: unique, count: unique.length });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
}

function detectSubjects(text) {
  const t = text.toLowerCase();
  const subjects = [];
  if (t.includes("math") || t.includes("maths")) subjects.push("Math");
  if (t.includes("science") || t.includes("physics") || t.includes("chemistry") || t.includes("biology")) subjects.push("Science");
  if (t.includes("english")) subjects.push("English");
  if (t.includes("hindi")) subjects.push("Hindi");
  if (t.includes("gk") || t.includes("quiz") || t.includes("general knowledge")) subjects.push("GK");
  if (t.includes("social") || t.includes("history") || t.includes("geography")) subjects.push("Social Science");
  return subjects.length > 0 ? subjects : ["All Subjects"];
}

function detectSegment(text) {
  const t = text.toLowerCase();
  if (t.includes("class 9") || t.includes("class 10") || t.includes("board")) return "Class 9–10";
  if (t.includes("class 6") || t.includes("class 7") || t.includes("class 8")) return "Class 6–8";
  if (t.includes("class 1") || t.includes("class 2") || t.includes("class 3") || t.includes("primary") || t.includes("kids")) return "Class 1–5";
  if (t.includes("olympiad") || t.includes("ntse") || t.includes("competition")) return "Class 5–10";
  return "Class 1–10";
}

function calculateBrandFit(subs, eng) {
  if (eng >= 7 || subs >= 70000) return "Very High";
  if (eng >= 5 || subs >= 40000) return "High";
  return "Medium";
}