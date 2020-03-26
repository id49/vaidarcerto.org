module.exports = {
  plugins:[
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-161608254-1',
      }
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-private.json"),
        types: [
          {
            type: 'LearningPaths',
            collection: 'learningpaths',
            map: doc => ({
              title: doc.title,
              slug: doc.slug
            }),
          },
          {
            type: 'Lessons',
            collection: 'lessons',
            map: doc => ({
              title: doc.title,
              slug: doc.slug,
              description: doc.description,
              videoUrl: doc.video_url,
              learningPath: doc.learningpath,
              position: doc.position
            }),
          }
          /*,
          {
            type: 'Author',
            collection: 'authors',
            map: doc => ({
              name: doc.name,
              country: doc.country,
              books___NODE: doc.books.map(book => book.id),
            }),
          },*/
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png',
  
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },

  ]
}
