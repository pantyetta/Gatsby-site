import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../style/root.css"

const Tag = ({ pageContext }) => {
    
    const node = pageContext.post
    return ( 
        <>
        <Header />
        <div className="content">
          <h1 key={node.id}>{node.name}</h1>
          <ul>
            {node.articles.map(articles => (
                <li key={articles.id}><a href={"/post/" + articles.id}>{articles.title}</a></li>
            ))}
          </ul>
        </div>
        <Footer />
        </>
    )
}

export default Tag