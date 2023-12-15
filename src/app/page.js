'use client'

import LandingPage from "src/landingPage";
import 'tailwindcss/tailwind.css'
import Header from "../../components/header";
import About from "../../components/about";
import * as React from "react";


export default function App() {
  return (
      <div className="bg-stone-100 min-h-screen text-gray-800 w-full h-fit ">
        <div className="scroll-snap h-full overflow-hidden">
          <Header/>
            
          <About/>
        </div>
      </div>
  )
}
