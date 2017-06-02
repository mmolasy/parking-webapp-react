/**
 * Created by moliq on 22.04.17.
 */
import React, {Component} from 'react';
import Table from '../Table/Table'
import 'react-datetime/css/react-datetime.css';
import './Parking.css';
import '../Table/Table.css';
import api from '../../apiClient';

export default class Parking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingSize: 6,
      isCreated: false,
      parkingState: [],
     // tableAction: 'none',
      kolejka: ''
    };

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.giveEvents = this.giveEvents.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getNextEvent = this.getNextEvent.bind(this);
    this.createParking = this.createParking.bind(this);
  }

  createParking(event){
    event.preventDefault();
    this.createNewParking();
  }

  handleInputChange(e) {
    var name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  createNewParking(){
    let size = parseInt(this.state.parkingSize);
    api.parking.newParking(size, size)
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({
          parkingState: resp.parking,
          isCreated: true
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  /*handleSubmit(event, action) {
    alert('Action ' + action);
    this.table.uploadPosition(this.path);
    this.setState({tableAction: 'add'})
    event.preventDefault();
  }*/

  giveEvents(event){
    event.preventDefault();
    console.log(this.state.kolejka);
    api.parking.giveEvents(this.state.kolejka)
      //.then((resp) => resp.json())
      .then((resp) => {
      console.log(resp)
      })
      .catch((err) => {
        console.log("error");
      })
  }

  getNextEvent(event){
    event.preventDefault();
    api.parking.giveNextTimeEvent()
      .then((response) => {
        console.log(response);
        setTimeout(() => {this.doEvent()}, 2000);
      })
    .catch((error) => {
      console.log("Error"+error);
      setTimeout(() => {this.doEvent()}, 2000);
    });
  }

  doEvent(){
    api.parking.doNextEvent()
      .then((resp) => resp.json())
      .then((resp) => {
        this.uploadParking(resp.parking);
      })
      .catch((error) => {
        console.log("Error"+error);
      })
  }

  uploadParking(parkingState){
    this.setState({
      parkingState: parkingState
    });
  }

  render() {
    return (

      <div>
        {
          !this.state.isCreated ?
            <div className="car">
              <form onSubmit={(event) => this.createParking(event)}>
                <input type="text" name="parkingSize" placeholder="Podaj rozmiar" onChange={this.handleInputChange}/><br/>
                <button type="submit">Podaj rozmiar parkingu</button>
              </form>
            </div>
            :
            <div>
              <div className="car">
                Podaj kolejkę zadań do Parkingu
                <form onSubmit={(event) => this.giveEvents(event)}>
                  <textarea type="text" name="kolejka" placeholder="Podaj kolejkę" onChange={this.handleInputChange}/><br/>
                  <button type="submit">Wyślij kolejkę zadań</button>
                </form>
              </div>
              <div className="space"></div>
              <div className="car">
                <form onSubmit={(event) => this.getNextEvent(event)}>
                  <button type="submit">Wykonaj zadanie</button>
                </form>
              </div>
              <Table ref={instance => {
                this.table = instance;
              }}
                     parkingState={this.state.parkingState}
                     size={this.state.parkingSize}
              />
            </div>
        }
      </div>)
  }
}
