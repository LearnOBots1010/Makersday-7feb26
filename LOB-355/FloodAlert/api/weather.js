// /api/weather.js
export default async function handler(req, res) {
    const { city, lat, lon } = req.query;
    const apiKey = process.env.OPENWEATHER_KEY; // your key from Vercel env

    if (!apiKey) {
        return res.status(500).json({ error: "OpenWeather API key not configured." });
    }

    let url;
    if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        return res.status(400).json({ error: "Please provide city name or coordinates." });
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch weather data." });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Error fetching weather data." });
    }
}
