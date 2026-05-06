import { useState } from 'react'

function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // 👇 PASTE YOUR API KEY BETWEEN THE QUOTES (don't share it!)
    const API_KEY = "7bdcdb6cc6f514d3ea2d49569a99a230"

    const fetchWeather = async () => {
        if (city === "") {
            setError("Please enter a city!")
            return
        }
        setLoading(true)
        setError("")
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            )
            const data = await response.json()
            if (data.cod === 200) {
                setWeather(data)
            } else {
                setError("City not found!")
                setWeather(null)
            }
        } catch (err) {
            setError("Something went wrong!")
        }
        setLoading(false)
    }

    return (
        <div style={{ padding: "40px", fontFamily: "Arial", textAlign: "center", maxWidth: "500px", margin: "auto" }}>
            <h1>🌤️ Weather App</h1>

            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: "12px", width: "70%", borderRadius: "8px", border: "1px solid purple", fontSize: "16px" }}
            />
            <button
                onClick={fetchWeather}
                style={{ padding: "12px 20px", marginLeft: "10px", backgroundColor: "purple", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}
            >
                Search
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f0f8ff", borderRadius: "10px" }}>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <h1 style={{ fontSize: "60px", color: "purple" }}>{Math.round(weather.main.temp)}°C</h1>
                    <p style={{ fontSize: "20px" }}>{weather.weather[0].description}</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>💨 Wind: {weather.wind.speed} m/s</p>
                </div>
            )}
            <footer style={{ marginTop: "50px", padding: "20px", textAlign: "center", color: "gray", borderTop: "1px solid #eee" }}>
    <p>Made with ❤️ by Swetha — 2026</p>
</footer>
        </div>
    )
}

export default App