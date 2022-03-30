import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../style/footer.css"

const Footer = () => {

    const data = useStaticQuery(
        graphql`
            {
                strapiFooterText {
                    id
                    text
                  }
            }
        `
    )
    return (
        <footer>
            <p key={data.strapiFooterText.id}><small>{data.strapiFooterText.text}</small></p>
        </footer>
    )
}

export default Footer