import React from 'react'
import LineDecoration from '../components/line-decoration'
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import SkillCard from '../components/skill-card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { createRef } from 'react'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function SkillSection(props) {
    const textDecor = useRef(null)
    const lineDecorRef = createRef()
    const { allSkillJson } = useStaticQuery(
        graphql`
        query MyQuery {
            allSkillJson {
              nodes {
                name
                items {
                  alt
                  image {
                    childImageSharp {
                       fluid{
                           src
                       } 
                    }
                  }
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
                    end: "+=420%",
                },
                y: 1100,
            }
        )

    }, [])

    return (
        <section {...props} id="skill" className="skill-section">
            <div className="card-container">
                <div className="card-group">
                    {
                        allSkillJson.nodes.map((data, idx) => {
                            return <SkillCard data={data} key={idx}></SkillCard>
                        })
                    }
                </div>
            </div>
            <div className="text-decor-container">
                <h1 ref={textDecor}>
                    MY
                    <br />
                    SKILLS
                </h1>
                <LineDecoration ref={lineDecorRef} text="" inverted={true} ></LineDecoration>
            </div>
            <div className="img-decor-container">
                <div className="img-decor"></div>
            </div>
        </section>
    )
}


export default SkillSection
