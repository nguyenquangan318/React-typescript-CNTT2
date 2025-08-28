import { useContext } from "react";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./context/ThemeContext";


export default function App() {
  const { theme } = useContext(ThemeContext)
  console.log(theme);
  
  return (
    <div>App
      <ThemeButton></ThemeButton>
    </div>
  )
}
