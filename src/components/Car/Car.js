/**
 * Created by moliq on 22.04.17.
 */
import React, {Component} from 'react';
import Datetime from 'react-datetime';
import Table from '../Table/Table'
import 'react-datetime/css/react-datetime.css';
import './Car.css';
import '../Table/Table.css';

export default class Car extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      owner: '',
      tableAction: 'none'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }


  handleSubmit(event, action) {
    alert('Action ' + action);
    this.table.uploadPosition(this.path);
    this.setState({tableAction: 'add'})
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({owner: event.target.value});
  }

  handleChangeDate(name, event) {
    this.setState({[name]: event._d.valueOf()});
    console.log(this);
  }

  getResponse() {
    return fetch('http://www.thomas-bayer.com/sqlrest/CUSTOMER/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Success: "+JSON.stringify(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  path = [[0,0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2]];


  render() {
    return (
      <div>
       <div className="car">
        Dodaj nowy pojazd do parkingu
        <form onSubmit={this.handleSubmit.bind(this, "add")}>
          <input type="text" name="owner" placeholder="Podaj id" onChange={this.handleChange}/><br/>
          <Datetime placeholder="Data rozpoczęcia" dateFormat="YYYY-MM-DD" timeFormat={"hh-mm-ss"} name="startDate" onChange={this.handleChangeDate.bind(this, "startDate")}/>
          <Datetime placeholder="Data zakończenia" dateFormat="YYYY-MM-DD" timeFormat={"hh-mm-ss"} name="endDate" onChange={this.handleChangeDate.bind(this, "endDate")}/>
          <button>Dodaj nowy pojazd do parkingu</button>
        </form>
       </div>
        <div className="space"></div>
        <div className="car">
          Pobierz pojazd z parkingu
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="owner" placeholder="Podaj id" onChange={this.handleChange}/><br/>
            <button>Pobierz pojazd</button>
          </form>
        </div>
        <Table ref={instance => {this.table = instance; }}/>
    </div>)
  }
}
