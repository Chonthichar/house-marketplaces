import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet";

const MetaDecorator = ({title, description, imageUrl, imageAlt}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title}/>
            <meta property="og:description"
                  content={description}/>
            <meta property="og:type" content="article"/>
            <meta property="og:url" content="window.location.pathname+window.location.search"/>
            <meta property="og:image" content={imageUrl}/>

        </Helmet>
    )
}
MetaDecorator.prototype ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt:PropTypes.string.isRequired,
}
export default MetaDecorator