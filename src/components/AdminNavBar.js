import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/questions">Questions</Link>
        </li>
        <li>
          <Link to="/admin/quizzes">Quizzes</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
