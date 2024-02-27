import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex">
        <Link to="/">
          <h3>IS</h3>
        </Link>
        <form>
          <input type="text" name="" placeholder="Search...." id="" />
          <button>Search</button>
        </form>
        <div className="flex">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </header>
    </>
  );
}
