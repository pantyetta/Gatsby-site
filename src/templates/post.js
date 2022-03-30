import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../style/root.css"

const Post = ({ pageContext }) => {
    
    const node = pageContext.post

    node.content.medias.forEach(medias =>{
      if(typeof medias.src !== 'undefined'){
        const oldurl = medias.src
        const newurl = medias.localFile.childImageSharp.gatsbyImageData.images.fallback.src
        const html = node.content.data.childMarkdownRemark.html
        node.content.data.childMarkdownRemark.html = html.replace(oldurl, newurl)
      }
    })
    
    return ( 
        <>
        <Header />
        <div className="content">
          <h1 key={node.id} className="title">{node.title}</h1>
          <div className="markdown" dangerouslySetInnerHTML={{__html: node.content.data.childMarkdownRemark.html}}></div>
        </div>
        <Footer />
        </>
    )
}

export default Post