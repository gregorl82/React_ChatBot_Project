import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Navigation = (props) => {
  return (
    <ul>

    <li className = "navLinkPhoto">
      <Link to="/photos" id="photos">Photos</Link>
    </li>
    <li className = "navLinkContact">
    <Link to="/contacts/" id="contacts">Contacts</Link>
    </li>
    <li className = "navLinkReminder">
    <Link to="/reminders" id="reminders">Reminders</Link>
    </li>
    <li className = "navLinkPuzzle">
    <Link to="/puzzles" id="puzzles">Puzzles</Link>
    </li>

    </ul>

  )
}

export default Navigation;
