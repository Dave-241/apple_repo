"use client";

import React from "react";
import Header from "../header";
import Subheader from "./components/subheader";
import Excerpt from "./components/excerpt";
import Hero_1 from "./components/hero1";
import Hero_2 from "./components/hero2";
import Hero_3 from "./components/hero3";
import System_display from "./components/system_display";
import Hero4 from "./components/hero4";

export default function Home() {
  return (
    <>
      <Header navbg="white" navtext="black" opacity="0.5" />
      <Subheader />
      <Excerpt />
      <Hero_1 />
      <Hero_2 />
      <Hero_3 />
      <System_display />
      <Hero4 />
    </>
  );
}
