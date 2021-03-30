import React from 'react'
import IconBox from './icon-box'

function SkillCard({ data }) {
    return (
        <div className="card">
            <h3>{data.name}</h3>
            <div className="card-body">
                {
                    data.items.map((item, idx) => {
                        const { alt, link, image } = item
                        return <IconBox image={image.childImageSharp.fluid.src} key={idx} alt={alt} link={link}></IconBox>
                    })
                }
            </div>
        </div>
    )
}

export default SkillCard
