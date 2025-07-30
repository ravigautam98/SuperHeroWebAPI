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

    const fetchData = () => {
        fetch('/weatherforecast')
            .then(res => res.json())
            .then(data => setForecast(data));
    };

    return (
        <>
            <div className="App" style={{ background: "red", borderRadius: "5px", margin : "10px" }} >
            <h1>My Weather App</h1>
            <ul>
                {forecast.map((item, index) => (
                    <li key={index}>
                        {item.date} | {item.summary} | {item.temperatureC}'C
                    </li>
                ))}
            </ul>
        </div>
        <div>
             <button onClick={fetchData}>Refresh</button>
        </div>
        </>
    );
}

export default App;
