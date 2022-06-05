import { useState } from "react";
import styled from "styled-components";
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
  const [backgroundImage, setBackGroundImage] = useState<string>("");

  return (
    // A wrapper to set the background image. We can pass props to styled components just like we pass them to a react component
    // That's why styled components are super powerful 💪🏻
    <StyledApp image={backgroundImage}>
      <Wrapper>
        <Search />
        <Result />
        <ForeCast />
      </Wrapper>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div<{ image: string }>`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    ${(props) => `url(${props.image})`};

  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 50px 100px;
`;
