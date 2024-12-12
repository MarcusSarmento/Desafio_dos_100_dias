import React from "react";
import image from "../assets/NEWS.png"

const NewsItem = ({title = "",description = "", src, url}) => {
  if (!title || !description || !src || !url) return null; 


  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={src || image} className="card-img-top" style={{ height:"200px", width:"325px" }} />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam commodi iure eaque distinctio, fugit officiis libero."}</p>
                <a href={url} className="btn btn-primary">Saiba mais</a>
            </div>
    </div>
  )
}

export default NewsItem