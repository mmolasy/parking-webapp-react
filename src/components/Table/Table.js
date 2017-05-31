import React, {Component} from 'react';
import "./Table.css";
export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingState: this.props.parkingState
    };

    this.changeArray = this.changeArray.bind(this);
    this.uploadPosition = this.uploadPosition.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({parkingState: props.parkingState});
  }

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
    this.setState({parkingState: this.emptyArray});
  }

  changeArray(){
    console.log("Change value");
    this.emptyArray[2][2] = 1;
    this.setState({parkingState: this.emptyArray});
  }

  checkFieldValue(elem){
    if(elem === 'O'){
      return (
          <img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/>
      )
    } else if(elem === "R"){
      return (
        '*'
      )
    } else {
      return (
        ''
      )
    }
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
          {this.state.parkingState.map((key, value) =>
            <tr>
              {key.map((key2, value2) =>
              <td>
                {
                  this.checkFieldValue(key2)
                  //key2 === "O" ? <img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/> : ''
                }
              </td>
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
