import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Navigation = (props) => {
  return (
    <ul>

    <li className = "navLinkPhoto">
      <Link to="/photos" className="link wobble-vertical-on-hover">Photos</Link>
    </li>
    <li className = "navLinkContact">
    <Link to="/contacts/" className="link wobble-vertical-on-hover">Contacts</Link>
    </li>
    <li className = "navLinkReminder">
    <Link to="/reminders/" className="link wobble-vertical-on-hover">Reminders</Link>
    </li>
    <li className = "navLinkPuzzle">
    <a href="https://sudoku.com/" target="_blank" className="link wobble-vertical-on-hover">Puzzles</a>
    </li>

    </ul>

  )
}

export default Navigation;
