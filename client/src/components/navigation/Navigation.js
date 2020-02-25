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
    <Link to="/reminders" className="link wobble-vertical-on-hover">Reminders</Link>
    </li>
    <li className = "navLinkPuzzle">
    <Link to="/puzzles" className="link wobble-vertical-on-hover">Puzzles</Link>
    </li>

    </ul>

  )
}

export default Navigation;
