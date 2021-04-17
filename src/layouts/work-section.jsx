import React from 'react'
import LineDecoration from '../components/line-decoration'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { createRef } from 'react'
import { useEffect } from 'react'
import { StaticQuery, graphql, useStaticQuery, navigate } from "gatsby"

gsap.registerPlugin(ScrollTrigger)

function WorkSection() {
    const textDecor = useRef(null)
    const lineDecorRef = createRef()
    const arr = Array(7).fill('a')
    const { allWorksJson } = useStaticQuery(
        graphql`
        query WorksQuery {
            allWorksJson {
                nodes {
                id
                source
                slug
                demo
                stacks
                summary
                tasks
                title
                type
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
                    start: 'top 20%',
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
                y: 1200,
            }
        )
    }, [])

    return (
        <section id="work" className="work-section">
            <div className="text-decor-container">
                <LineDecoration ref={lineDecorRef} text="" ></LineDecoration>
                <h1 ref={textDecor}>
                    MY
                    <br />
                    WORKS
                </h1>
            </div>
            <div className="card-container">
                <div className="card-group">
                    {
                        allWorksJson.nodes.map(item => {
                            return <div key={item.id} onClick={() => { navigate(`/works/${item.slug}`) }} className="card">
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkSection
