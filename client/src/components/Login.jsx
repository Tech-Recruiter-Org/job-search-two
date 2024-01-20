import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({}) {
  return (
    <div>
      No account? Sign up <Link to="/register">HERE</Link>
    </div>
  );
}
