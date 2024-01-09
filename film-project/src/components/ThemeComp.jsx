"use client"
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = ({mounted}) => {
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return null
  }
  
  return (
    <div>
      {theme === "light" ? (
        <CiDark onClick={() => setTheme("dark")} size={25} className="cursor-pointer" />
      ) : (
        <CiLight onClick={() => setTheme("light")} size={25} className="cursor-pointer" />
      )}
    </div>
  );
};

export default ThemeComp;
