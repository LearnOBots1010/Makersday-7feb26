import fetch from "node-fetch";

export default async function handler(req, res) {
    const { city, lat, lon } = req.query;

    const apiKey = process.env.OPENWEATHER_API_KEY; // Hidden in Vercel environment

    if (!apiKey) {
        return res.status(500).json({ error: "API key not configured" });
    }

    let url;
    if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        return res.status(400).json({ error: "City or coordinates required" });
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
