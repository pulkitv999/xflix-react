import React from "react";
import "./Iframe.css"

const Iframe = ({videourl}) => {
    console.log(videourl)
    return (
        <iframe frameBorder="0" title=" " className="frame"  src={`https://${videourl}`} ></iframe> 
    )
 }
export default Iframe;