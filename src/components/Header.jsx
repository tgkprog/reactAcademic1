import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = [
  "Fundamental",
  "Crucial",
  "Core",
  "Important",
  "Salient",
  "Main",
]; //, "Paramount"

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const word1 = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word1} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
