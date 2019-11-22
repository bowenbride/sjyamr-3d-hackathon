import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list--item">About</li>
          <li className="navbar__list--item">Contact</li>
          <li className="navbar__list--item">My Account</li>
        </ul>
      </nav>
    </div>
  );
}
