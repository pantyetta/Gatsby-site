"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[851],{1619:function(e,t,a){var n=a(7294),r=a(1597);t.Z=function(){var e=(0,r.K2)("712565814");return n.createElement("footer",null,n.createElement("p",{key:e.strapiFooterText.id},n.createElement("small",null,e.strapiFooterText.text)))}},7306:function(e,t,a){var n=a(7294),r=a(1597);t.Z=function(){var e=(0,r.K2)("3092328407");return n.createElement("header",null,n.createElement("div",{className:"header-inner"},n.createElement("ul",{className:"header-links header-trees"},e.strapiHeaderLink.url_compilations.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:e.url},e.displayname))}))),n.createElement("ul",{className:"header-trees"},e.allStrapiArticle.edges.map((function(e){return n.createElement("li",{key:e.node.id},n.createElement("a",{href:"/post/"+e.node.id},e.node.title))}))),n.createElement("ul",{className:"header-trees"},e.strapiHeaderTag.tags.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"/tag/"+e.name},e.name))}))),n.createElement("ul",null,e.strapiHeaderSnsLink.url_compilations.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:e.url},e.displayname))})))))}},2396:function(e,t,a){a.r(t);var n=a(7294),r=a(7306),l=a(1619);t.default=function(e){var t=e.pageContext.post;return t.content.medias.forEach((function(e){if(void 0!==e.src){var a=e.src,n=e.localFile.childImageSharp.gatsbyImageData.images.fallback.src,r=t.content.data.childMarkdownRemark.html;t.content.data.childMarkdownRemark.html=r.replace(a,n)}})),n.createElement(n.Fragment,null,n.createElement(r.Z,null),n.createElement("div",{className:"content"},n.createElement("h1",{key:t.id,className:"title"},t.title),n.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t.content.data.childMarkdownRemark.html}})),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-templates-post-js-85c4543a0472813644bd.js.map