import React from "react";

import './styles.css'
import { format } from "date-fns";
import { usePostContext } from "../../PostContext";
import { useNavigate } from "react-router-dom";

export default function TaskTwo() {
  const { post } = usePostContext()
  const history = useNavigate()

  const handleClick = (post: any) => {
    history(`/post/${post.id}`, { state: { post }})
  }

  const goToPageAuthorsDetails = (autor: any) => {
    history(`/authors/${autor.id}`, { state: { autor }})
  }

  return (
    <div>
      <h1 style={{ paddingLeft: 10}}>Post list</h1>
      {/* card container */}
      <div className="card-container">
        { post.map( post => (
          <div className="card" key={post.id}>
            <img onClick={() => handleClick(post)} src={post.images[0].path} alt="Descripción de la imagen" width={260} height={120} style={{ objectFit: 'cover', cursor: 'pointer'}}/>

            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Fecha de publicación: {format(new Date(post.publishDate), 'EEEE d, MMM, yyyy')}</p>
            
            <div>
              <p>Autores:</p>
              <ul style={{ cursor: 'pointer'}}>
                {post.authors.map( (author: any, index: number) => (
                  <li key={index} onClick={()=> goToPageAuthorsDetails(author)}>{author.name}</li>
                ))}
              </ul>
            </div>

            
          </div>
        ))}
      </div>  
    </div>
  )
}
