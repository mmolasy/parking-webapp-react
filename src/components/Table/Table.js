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
      <table border="5">
        <tr>
          <td>komórka1</td>	<td>komórka2</td>
        </tr>
        <tr>
          <td>komórka3</td>	<td>komórka4</td>
        </tr>
      </table>
     )
   }
}
