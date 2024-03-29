import { useContext, useEffect, useState } from "react";
import "./cursor.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context";

const Cursor = () => {
    const { theme } = useContext(ThemeContext);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", mouseMove);

        return ()=>{
            window.removeEventListener("mousemove", mouseMove);
        }
    },[]);

  return (
    <motion.div 
        className="cursor" 
        style={{border: `1px solid ${theme === 'dark' ? '#ffffff' : '#000000'}`}}
        animate={{ x: position.x, y: position.y }}>
    </motion.div>
  )
}

export default Cursor