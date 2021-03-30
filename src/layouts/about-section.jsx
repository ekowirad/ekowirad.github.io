import { useStaticQuery } from 'gatsby'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { createRef } from 'react'
import { useEffect } from 'react'
import React from 'react'
import IconBox from '../components/icon-box'
import LineDecoration from '../components/line-decoration'

gsap.registerPlugin(ScrollTrigger)

function AboutSection() {
    const textDecor = useRef(null)
    const lineDecorRef = createRef()
    const { allAboutJson } = useStaticQuery(
        graphql`
        query AboutQuery {
            allAboutJson {
    nodes {
      content
      networks {
        image {
          childImageSharp {
            fluid {
                src
            }
          }
        }
        alt
        link
      }
    }
  }
          }
          `
    )


    useEffect(() => {
        gsap.from(lineDecorRef.current, {
            scrollTrigger: {
                trigger: lineDecorRef.current,
                scrub: 0.5,
                start: 'top',
                end: "+=170%",

            },
            y: -1000,
        })
        gsap.fromTo(textDecor.current,
            {
                scrollTrigger: {
                    trigger: textDecor.current,
                    scrub: 0.5,
                    start: 'top 10%',
                    end: "+=200%",
                },
                y: -1000,
            },
            {
                scrollTrigger: {
                    trigger: textDecor.current,
                    scrub: 0.5,
                    start: 'top 20%',
                    end: "+=380%",
                },
                y: 1200,
            }
        )
    }, [])

    return (
        <section id="about" className="about-section">
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        {allAboutJson.nodes[0].content}
                    </div>
                    <div className="card-footer">
                        {
                            allAboutJson.nodes[0].networks.map((item, idx) => {
                                const { alt, link, image } = item
                                return <IconBox image={image.childImageSharp.fluid.src} key={idx} alt={alt} link={link}></IconBox>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="text-decor-container">
                <LineDecoration ref={lineDecorRef} text=""></LineDecoration>
                <h1 ref={textDecor}>
                    ABOUT
                    <br />
                    ME
                </h1>
            </div>
            <div className="img-decor-container">
                <div className="img-decor"></div>
            </div>
        </section>
    )
}

export default AboutSection