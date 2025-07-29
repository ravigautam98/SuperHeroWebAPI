// src/App.tsx
import  { useEffect, useState } from 'react';

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [forecast, setForecast] = useState<WeatherForecast[]>([]);

    useEffect(() => {
        fetch("/weatherforecast")
            .then(response => response.json())
            .then(data => {
                console.log("Weather API Response:", data);
                setForecast(data);
            })
            .catch(error => console.error("API error:", error));
    }, []);

    return (
        <div className="App">
            <h1>My Weather App</h1>
            <ul>
                {forecast.map((item, index) => (
                    <li key={index}>
                        {item.date} | {item.summary} | {item.temperatureC}'C
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
