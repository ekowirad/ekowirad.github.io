import React from 'react'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


function Footer() {
    const currentYear = new Date().getFullYear()
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
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p>&copy; {currentYear}, Eko Wira Dharma.</p>
                <div className="menu-bottom">
                    {
                        links.map(({ to, title },idx) => {
                            return <AnchorLink
                                to={to}
                                key={idx}
                                title={title}
                            />
                        })
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer
