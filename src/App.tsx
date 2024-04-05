import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from './Components/Nav';
import TaskOne from './Tasks/One';
import TaskTwo from './Tasks/Two';
import Instructions from './Components/Instructions';
import PostId from './Tasks/Two/post-id';
import AuthorId from './Tasks/Two/authors-id';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Instructions />} />
          <Route path="task-1" element={<TaskOne />} />
          <Route path="task-2" element={<TaskTwo />} />
          <Route path="post/:id" element={<PostId />} />
          <Route path="authors/:id" element={<AuthorId />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to instructions</Link>
      </p>
    </div>
  );
}