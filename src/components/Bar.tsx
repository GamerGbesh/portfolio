import { motion } from "motion/react";
import {MotionValue} from "motion";


export default function Bar( {scrollY }: {scrollY: MotionValue} ) {
    return (
        <motion.div  style={{
            scaleX: scrollY,
            transformOrigin: "left",
            height: 4,
            background: "#0af",
            position: "fixed",
            top: 55,
            left: 0,
            right: 0,
            zIndex:100}}></motion.div>
    );
}