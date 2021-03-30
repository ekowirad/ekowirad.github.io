const dataFile = [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `data-root`,
            path: `${__dirname}/src/data/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `work`,
            path: `${__dirname}/src/data/works`,
        },
    },

]

const imageFile = [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `image-root`,
            path: `${__dirname}/src/images/`,
        },
    },
   
]

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        ...imageFile,
        ...dataFile,
    ]
}