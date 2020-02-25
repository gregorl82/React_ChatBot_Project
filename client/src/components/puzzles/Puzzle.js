import React from  'react';
import '../../App.css';

const Puzzle = (props) => {
  // if(!props.listOfSites)
  // return "loading Puzzles"



  return (
    <div >
    <ul className="puzzle-item">
      <iframe src="https://www.websudoku.com/" frameBorder="0" align="bottom">Sudoku</iframe>
    </ul>

    <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
      <a href="/" id="home" >Home</a>
    </div>


    </div>

  )

}


export default Puzzle;
//https://www.websudoku.com/
