import React from 'react'
import { useEffect,useRef } from 'react'
import { motion } from 'framer-motion'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './GSAPcss.css'

// gsap animation plugin pantrathuku(scroll pantrapa varanuma,illa others activity hover {or} click)
gsap.registerPlugin(ScrollTrigger)

export const Anima2gsap = () => {
    const zoomRef=useRef(null);

        useEffect(()=>{
            gsap.fromTo(
                zoomRef.current,
                {scale:1},
                {
                 scale:1.5,
                ScrollTrigger:{
                  trigger:zoomRef.current,
                  start:"top center",
                  end:"bottom top",
                  scrub:true,
                } 
                }
                
            );
        }, []);


  return (
    
    <>
   <div className="container">
      <section className="section first-section">
        Scroll Down ⬇
      </section>
      <section ref={zoomRef} className="section second-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="motion-div"
        >
          Zoom & Fade In Effect
        </motion.div>
      </section>
      <section className="section third-section">
        More Content
      </section>
    </div>

    </>
  )
}
