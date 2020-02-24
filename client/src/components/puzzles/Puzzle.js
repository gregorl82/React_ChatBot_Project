import React from  'react';
// import Iframe from 'react-iframe';

const Puzzle = (props) => {
  if(!props.listOfSites)
  return "loading Puzzles"



  return (
    <ul className="component-list">
      {props.listOfSites}
    </ul>
  )

}


export default Puzzle;
//https://www.websudoku.com/
