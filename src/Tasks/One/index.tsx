import React, { useEffect, useState } from 'react';
import { fetchPost } from './api';
import { usePostContext } from '../../PostContext';

export default function TaskOne() {
  
  const { post, setPost } = usePostContext()


  useEffect(()=> {
    const getPost = async ()=> {
      try {
        const data = await fetchPost()
        console.log(data);
        
        setPost(data)
      } catch (error){
        console.error('Error:', error);
      }
    }

    getPost()
  }, [])

  return (
    <>
      <div>
        {
          post ? (
            <div>
              <h2>posts</h2>
              <p>{post.length}</p>
            </div>
          ) : (
            <p>Cargando....</p>
          )}

      </div>
    </>
  )
}
