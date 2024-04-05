import React, { useState } from "react";

import "./styles.css";
import { useLocation, useParams } from "react-router-dom";

export default function AuthorId() {
  const { id } = useParams();
  const location = useLocation();
  const author = location.state.autor;

  return (
    <div className="body">
      <div style={{ paddingLeft: 20 }}>
        <h1>Autor details: {id} </h1>
        <p>Nombre: {author.name}</p>
      </div>
    </div>
  );
}
