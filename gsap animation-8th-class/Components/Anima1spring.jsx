import React from 'react'
import styled from "@emotion/styled";// Styling
import { motion } from "framer-motion"; // Animations
import { FaAndroid,FaDatabase, FaWpforms } from "react-icons/fa";
 
export const Anima1spring = () => {
//  emotion styled component
       const StyledHeader = styled.h1`
       text-align:center;
       color:red;
       margin-bottom:20px;
       `;

       const pageVariants={
        initial:{opacity:0.8,x:"100vw"},
        animate:{opacity:1,x:10},
        exit:{opacity:0.8,y:"-100vw"},
        transition:{type:"spring",stiffness:50},

       };
  return (
    <>
    <h1>Aniamtion-Spring</h1>
    <motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
   <StyledHeader>
   <FaAndroid /> Welcome to React Libraries Demo
   </StyledHeader>
   <p className="text-center">
      This app demonstrates the most popular React libraries in one program!
    </p>
    <div className="d-flex justify-content-center mt-4">
      
        <FaDatabase /> Fetch Data
     
      
        <FaWpforms /> Go to Form
        </div>
   </motion.div>
   </>
  )
}
 