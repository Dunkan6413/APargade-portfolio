import React, { cloneElement } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

export default function AnimatedOutlet() {
    const location = useLocation();
    const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
        {element && cloneElement(element, {key:location.pathname})}
    </AnimatePresence>
  )
}