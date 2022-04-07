const path = require("path")

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const PostResult = await graphql(
      `
      {
        allStrapiArticle {
          edges {
            node {
              title
              date
              content {
                data {
                  childMarkdownRemark {
                    html
                    rawMarkdownBody
                  }
                }
                medias {
                  alternativeText
                  file {
                    alternativeText
                  }
                  src
                  url
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              id
            }
          }
        }
      }
      `
    )
    if (PostResult.errors) {
        reporter.panicOnBuild('PostResult Error while running Graphql query.')
        return
    }

    const PostTemplate = path.resolve('./src/templates/post.js')

    PostResult.data.allStrapiArticle.edges.forEach(({ node }) => {
        createPage({
            path: `/post/${node.id}`,
            component: PostTemplate,
            context: { post: node }
        })
    })


    const Tagesult = await graphql(
      `
      {
        allStrapiTag {
          edges {
            node {
              name
              articles {
                title
                id
                date
                content {
                  data {
                    childMarkdownRemark {
                      excerpt(format: PLAIN, pruneLength: 80, truncate: true)
                    }
                  }
                }
                tags {
                  id
                  name
                }
              }
            }
          }
        }
      }
      `
    )
    
    if (Tagesult.errors) {
        reporter.panicOnBuild('TagResult Error while running Graphql query.')
        return
    }

    const TagTemplate = path.resolve('./src/templates/tag.js')

    Tagesult.data.allStrapiTag.edges.forEach(({ node }) => {
        createPage({
            path: `/tag/${node.name}`,
            component: TagTemplate,
            context: { post: node }
        })
    })

}