import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../style/header.css"

const Header = () => {

    const data = useStaticQuery(
        graphql`
            {
                strapiHeaderLink {
                    url_compilations {
                      id
                      displayname
                      url
                    }
                  }
                allStrapiArticle(limit: 3, sort: {order: DESC, fields: date}) {
                    edges {
                      node {
                        title
                        id
                      }
                    }
                  }
                strapiHeaderTag {
                    tags {
                      name
                      id
                    }
                  }
                strapiHeaderSnsLink {
                    url_compilations {
                      url
                      id
                      displayname
                    }
                  }
            }
        `
    )
    return (
        <header>
            <div className="header-inner">
                <ul className="header-links header-trees">
                    {data.strapiHeaderLink.url_compilations.map(url_compilations => (
                        <li key={url_compilations.id}>
                            <a href={url_compilations.url}>{url_compilations.displayname}</a>
                        </li>
                    ))}
                </ul>
                <ul className="header-trees">
                    {data.allStrapiArticle.edges.map(edges => (
                        <li key={edges.node.id}>
                            <a href={"/post/" + edges.node.id}>{edges.node.title}</a>
                        </li>
                    ))}
                </ul>
                <ul className="header-trees">
                    {data.strapiHeaderTag.tags.map(tags => (
                        <li key={tags.id}>
                            <a href={"/tag/" + tags.name}>{tags.name}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    {data.strapiHeaderSnsLink.url_compilations.map(url_compilations => (
                        <li key={url_compilations.id}>
                            <a href={url_compilations.url}>{url_compilations.displayname}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header
