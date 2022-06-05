import { ForeCast } from "./components/ForeCast";
import { Result } from "./components/Result";
import { Search } from "./components/Search";

// Goto to https://openweathermap.org/ siging/create account. From the API section generate a new key and replace the  ADD_YOUR_API_KEY with the copied API keuy
const API_KEY = "ADD_YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const AVAILABLE_BACKGROUNDS = [
  "Thunderstorm",
  "Drizzle",
  "Rain",
  "Snow",
  "Clouds",
];

const App = () => {
  return (
    <div>
      <Search />
      <Result />
      <ForeCast />
    </div>
  );
};

export default App;
