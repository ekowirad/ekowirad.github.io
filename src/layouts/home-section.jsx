import React, { useEffect, useRef } from 'react'
import ImageDecor from '../images/img-decor.jpg'
import { TweenMax } from 'gsap'
import { TimelineMax } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import LineDecoration from '../components/line-decoration'
import { Power1, Power2, Power3, Sine } from 'gsap/all'
import { forwardRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function HomeSection() {
    const noiseEl = useRef(null)
    const textMain = useRef(null)
    const textChild = useRef(null)
    const imageMain = useRef(null)
    const imageChild = useRef(null)
    const lineRight = useRef(null)
    const lineLeft = useRef(null)
    const tl = new TimelineMax()

    const links = [
        {
            to: '/#home',
            title: 'Home'
        },
        {
            to: '/#about',
            title: 'About'
        },
        {
            to: '/#skill',
            title: 'Skill'
        },
        {
            to: '/#work',
            title: 'Work'
        },
    ]


    useEffect(() => {
        homeAnimate()

    }, [])

    const homeAnimate = () => {
        TweenMax.from(imageMain.current, 3, {
            backgroundPositionY: -200,
            ease: Power2.easeInOut
        })

        tl.from(imageChild.current, 2.5, {
            x: -1000,
            ease: Sine.easeInOut
        })

        TweenMax.from(textChild.current, 2, {
            opacity: 0,
            y: 100,
            delay: 0.4,
            ease: Sine.easeIn
        })

        TweenMax.from(textMain.current, 1.6, {
            opacity: 0,
            // y: 80,
            delay: 1,
            ease: Sine.easeIn
        })

        TweenMax.to(noiseEl.current, 0.1, { attr: { scale: '80' }, delay: 2.5 })

        TweenMax.from(lineLeft.current, 1, {
            x: -200,
            opacity: 0,
            delay: 1.8
        })
        TweenMax.from(lineRight.current, 1, {
            x: 200,
            opacity: 0,
            delay: 1.8
        })

        gsap.delayedCall(1, () => {
            gsap.to(textMain.current, {
                scrollTrigger: {
                    trigger: textMain.current,
                    scrub: 0.5,
                    start: 'top 10%',
                    end: "+=200%",
                },
                y: 1200,
            })
        })


    }

    return (
        <section id="home" className="home-section">
            <div ref={lineLeft} className="line-decor">
                {
                    links.map(({ to, title }, idx) => {
                        return <AnchorLink
                            to={to}
                            title={title}
                            key={idx}
                        />
                    })
                }
                <div className="box"></div>
            </div>
            <div className="hero">
                <div className="text-hero">
                    <div ref={textChild} className="child"> HELLO</div>
                    <div ref={textMain} className="main"> <p>WORLD</p></div>
                </div>

                <div ref={imageMain} className="img-hero">
                    <svg>
                        <filter id="noise" >
                            <feTurbulence baseFrequency="0.004 0.3" result="NOISE" numOctaves="3" id="turbulence" />
                            <feDisplacementMap ref={noiseEl} in="SourceGraphic" in2="NOISE" scale="0"></feDisplacementMap>
                            <animate href="#turbulence" attributeName="baseFrequency" dur="160s" keyTimes="0;0.5;1" values="0.003;0.02;0.008" repeatCount="indefinite" />
                        </filter>
                    </svg>

                    <div className="child">
                        <img ref={imageChild} src={ImageDecor} alt="decorimage" />
                    </div>
                </div>
            </div>
            <LineDecoration ref={lineRight} text="Scroll Down" inverted={true}></LineDecoration>
        </section>
    )
}

export default HomeSection
