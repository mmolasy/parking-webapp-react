import React, {Component} from 'react';
import "./Table.css";
export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: this.emptyArray
    }

    this.changeArray = this.changeArray.bind(this);
    this.uploadPosition = this.uploadPosition.bind(this);
    //this.uploadPosition(this.props.data);
  }

  emptyArray = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ];


  uploadPosition(path) {
    console.log("upload_position");


    for (var i = 0; i < path.length; i++) {
      ((id, path) => {
        setTimeout(() => {this.make_move(path[id-1], path[id])}, 2000 * id);
        })(i, path);
      }
  }

  make_move(old, id){
    console.log(id);
    this.emptyArray[id[0]][id[1]] = 1;
    this.emptyArray[old[0]][old[1]] = 0;
    this.setState({cars: this.emptyArray});
  }

  changeArray(){
    console.log("Change value");
    this.emptyArray[2][2] = 1;
    this.setState({cars: this.emptyArray});
  }


  render(){
    return (
    <div>
      <div className="space"></div>
      <div className="main-component">
        <div className="new-car">
          <img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/>
          <img src="http://2.bp.blogspot.com/-ZGjqzKbcG1k/VigDoNXhVOI/AAAAAAAAeos/Ekln1uPPyoo/s400/animation.gif" width={60}/>
        </div>
        <table className="car-table">
          {this.state.cars.map((key, value) =>
            <tr>
              {key.map((key2, value2) =>
              <td>{key2 == 0 ? '' : <img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/>}</td>
            )}
            </tr>
          )}
        </table>
        <button onClick={this.uploadPosition.bind(this, "add")}>Change value</button>
      </div>
      <div className="space"></div>
    </div>)
   }
}
