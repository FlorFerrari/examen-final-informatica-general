

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurCrewPage from "./pages/OurCrewPage";
import DiscographyPage from "./pages/DiscographyPage"
import ShowcasesPage from "./pages/ShowcasesPage";
import MerchPage from "./pages/MerchPage";
import ContactUsPage from "./pages/ContactUsPage";


import ClassesPage from "./pages/ClassesPage";
import PressPage from "./pages/PressPage"
import MusicPlayerPage from "./pages/MusicPlayerPage";
import GamePage from "./pages/GamePage";
import NextDatesPage from "./pages/NextDatesPage";

import { Routes, Route } from "react-router-dom";

import "./styles/styles.css"
import React from "react";
import AnimatedCursor from "react-animated-cursor"

import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <Navbar/>
      
      <AnimatedCursor innerSize={10}
      outerSize={15}
      color='243, 112, 56'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      
     />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="aboutus" element={<AboutUsPage />}/>
        <Route path="ourcrew" element={<OurCrewPage />}/>
        <Route path="discography" element={<DiscographyPage />}/>
        <Route path="showcases" element={<ShowcasesPage />}/>
        <Route path="merch" element={<MerchPage />}/>
        <Route path="contactus" element={<ContactUsPage />}/>

        <Route path="classes" element={<ClassesPage />}/>
        <Route path="press" element={<PressPage />}/>
        <Route path="game" element={<GamePage />}/>
        <Route path="nextdates" element={<NextDatesPage />}/>

        

        <Route path="musicplayer" element={<MusicPlayerPage />}/>
      </Routes>
      
      <Footer/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
