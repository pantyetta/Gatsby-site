import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../style/root.css"

const Tag = ({ pageContext }) => {
    
    const node = pageContext.post
    return ( 
        <>
        <Header />
        <div className="content tag">
          <h1 key={node.id} className="title">{"#" + node.name}</h1>
          <ul className="articles">
            {node.articles.map(article => (
                <li key={article.id} className="article">
                  <div className="article-header">
                    <h2><a href={"/post/" + article.id}>{article.title}</a></h2>
                    <p>{article.date.replaceAll('-', '.')}</p>
                  </div>
                  <p className="article-pre">{article.content.data.childMarkdownRemark.excerpt}</p>
                  <ul className="article-tags">
                    {article.tags.map(tags =>(
                      <li key={tags.id}><a href={"/tag/" + tags.name}>{"#" + tags.name}</a></li>
                    ))}
                  </ul>
                </li>
            ))}
          </ul>
        </div>
        <Footer />
        </>
    )
}

export default Tag