import * as React from "react"
import { useEffect } from "react"
import Footer from "../components/footer"
import About from "../layouts/about-section"
import Home from "../layouts/home-section"
import Skill from "../layouts/skill-section"
import Work from "../layouts/work-section"
import LocomotiveScroll from 'locomotive-scroll';
import { useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const IndexPage = () => {

  // const scroll_containeer = useRef(null)
  useEffect(() => {
    // const locoScroll = new LocomotiveScroll({
    //   el: scroll_containeer.current,
    //   smooth: true
    // });
    // locoScroll.on("scroll", ScrollTrigger.update)

    // ScrollTrigger.scrollerProxy(scroll_containeer.current, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? locoScroll.scrollTo(value, 0, 0)
    //       : locoScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     };
    //   }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
    // });
    // const lsUpdate = () => {
    //   if (locoScroll) {
    //     locoScroll.update();
    //   }
    // };

    // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    // ScrollTrigger.refresh();

  }, [])




  return (
    <div >
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
