/**
 * Created by moliq on 22.04.17.
 */
import React, {Component} from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import './Car.css';

export default class Car extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      owner: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({owner: event.target.value});
  }

  handleChangeDate(name, event) {
    this.setState({[name]: event._d.valueOf()});
    console.log(this);
  }


  render() {
    return (
    (this.props.type == "IN") ?
      <div className="car">
        Dodaj nowy pojazd do parkingu
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Podaj id" onChange={this.handleChange}/><br/>
          <Datetime placeholder="Data rozpoczęcia" dateFormat="YYYY-MM-DD" timeFormat={"hh-mm-ss"} name="startDate" onChange={this.handleChangeDate.bind(this, "startDate")}/>
          <Datetime placeholder="Data zakończenia" dateFormat="YYYY-MM-DD" timeFormat={"hh-mm-ss"} name="endDate" onChange={this.handleChangeDate.bind(this, "endDate")}/>
          <button>Dodaj nowy pojazd do parkingu</button>
        </form>
      </div>
      :
      <div className="car">
        Pobierz pojazd z parkingu
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Podaj id" onChange={this.handleChange}/><br/>
          <button>Pobierz pojazd</button>
        </form>
      </div>
    );
  }
}
