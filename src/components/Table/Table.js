import React, {Component} from 'react';
import "./Table.css"

export default class Table extends Component {

  constructor(props) {
    super(props);
  }

  uploadPosition(id, path){

  }



  render(){
    var cars = this.props.cars;
    return (
      /*
       <table>
         {
           userButtons.map(function(ub) {
             var buttons = ub.buttons.map(function(button) {
               return (
                 <td>{button.value}</td>
               )
             });

             return (
               <tr>
                 <td>{ub.firstName}</td>
                 <td>{ub.lastName}</td>
                 {buttons}
               </tr>
             )
           })
         }
       </table>
       */
    <div>
      <div className="space"></div>
      <div className="main-component">
        <div className="new-car">
          <img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/>
          <img src="http://2.bp.blogspot.com/-ZGjqzKbcG1k/VigDoNXhVOI/AAAAAAAAeos/Ekln1uPPyoo/s400/animation.gif" width={60}/>
        </div>
        <table className="car-table">
          <tr>
            <td><img src="https://img.clipartfest.com/7fd177c99d9f6d4be85bd49929caa1e1_red-car-top-view-clip-art-car-clipart-from-above_640-480.svg" width={60}/></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
          </tr><tr>
          <td></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
        </tr><tr>
          <td></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
        </tr><tr>
          <td></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
        </tr><tr>
          <td></td>	<td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        </table>
      </div>
      <div className="space"></div>
    </div>)
   }
}
