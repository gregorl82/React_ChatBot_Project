import React, {Component} from  'react';
import Spinner from 'react-spinkit';
import '../../App.css';

class Puzzle extends Component {
constructor(props) {
  super(props);
  this.state = {
    loading: true
  };
}

hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

render () {
  return (
    <div className="puzzle-item" >
    <div id="loading">
    {this.state.loading ? (
         <Spinner
           className="loading text-center"
           name="three-bounce"
           color="white"
           fadeIn="none"
         />
       ) : null}
       </div>

      <iframe title ="sudoku puzzle link" src="https://www.websudoku.com/" frameBorder="0" align="bottom" onLoad={this.hideSpinner}>Sudoku</iframe>
      

    <div style={{'zIndex':99, 'position': 'absolute'}} className="puzzleNavLinkHome">
      <a href="/" id="home" >Home</a>
    </div>
    </div>
  )
}

}


  //
  //
// const Puzzle = (props) => {
//   // if(!props.listOfSites)
//   // return "loading Puzzles"
//



export default Puzzle;
//https://www.websudoku.com/
