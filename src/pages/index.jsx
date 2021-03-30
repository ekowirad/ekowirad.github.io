import * as React from "react"
import { useEffect } from "react"
import Footer from "../components/footer"
import About from "../layouts/about-section"
import Home from "../layouts/home-section"
import Skill from "../layouts/skill-section"
import Work from "../layouts/work-section"


const IndexPage = () => {

  return (
    <div>
      <Home></Home>
      <About ></About>
      <Skill></Skill>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
