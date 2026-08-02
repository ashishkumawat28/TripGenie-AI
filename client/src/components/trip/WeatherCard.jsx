function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl mb-8">

      <h2 className="text-2xl font-bold mb-5">
        🌤 Current Weather
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <p>
          🌡 <strong>Temperature:</strong> {weather.temperature}°C
        </p>

        <p>
          ☁️ <strong>Condition:</strong> {weather.condition}
        </p>

        <p>
          💧 <strong>Humidity:</strong> {weather.humidity}%
        </p>

        <p>
          🌬 <strong>Wind:</strong> {weather.windSpeed} km/h
        </p>

      </div>

    </div>
  );
}

export default WeatherCard;
