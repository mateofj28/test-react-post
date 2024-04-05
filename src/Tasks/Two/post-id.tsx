import React, { useState } from "react";
import { format } from "date-fns";
import "./styles.css";
import { useLocation, useParams } from "react-router-dom";

export default function PostId() {
  const { id } = useParams();
  const location = useLocation()
  const post = location.state.post

  return (
    <div className="body">
      <h1>Post details: {id} </h1>
      <div className="center-card">
        <div className="card" style={{paddingBottom: 10}}>
          <img
            
            src={post.images[0].path}
            alt="Descripción de la imagen"
            width={260}
            height={120}
            style={{ objectFit: "cover", cursor: "pointer" }}
          />

          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>
            Fecha de publicación:{" "}
            {format(new Date(post.publishDate), "EEEE d, MMM, yyyy")}
          </p>

          <div>
            <p>Autores:</p>
            <ul>
              {post.authors.map((author: any, index: number) => (
                <li key={index}>{author.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
