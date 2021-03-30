import { TweenMax } from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'

function LineDecoration({ text, inverted }, ref) {
    const invert = inverted ? '-inverted' : ''
    const blinkRef = useRef(null)

    useEffect(() => {
        TweenMax.from(blinkRef.current, 0.8, {
            yoyo: true,
            repeat: -1,
            opacity: 0
        })
    }, [])

    return (
        <div ref={ref} className={'line-decor' + invert}>
            <p >{text}</p>
            <div ref={blinkRef} className="box"></div>
        </div>
    )
}

export default forwardRef(LineDecoration)
