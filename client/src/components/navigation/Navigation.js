import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
  return (
    <ul>

    <li className = "navLink">
      <Link to="/photos" id="photos">Photos</Link>
    </li>
    <li className = "navLink">
    <Link to="/contacts" id="contacts">Contacts</Link>
    </li>
    <li className = "navLink">
    <Link to="/reminders" id="reminders">Reminders</Link>
    </li>
    <li className = "navLink">
    <Link to="/puzzles" id="puzzles">Puzzles</Link>
    </li>

    </ul>

  )
}

export default Navigation;
