/**
 * Created by moliq on 27.05.17.
 */
'use strict';

export const host = 'http://localhost:5000';
export default {
  parking: {
    newParking: function (x1, y1) {
      var payload = {
        x: x1,
        y: y1
      };

      let url = `${host}/new_parking`,
        opt = {
          method: 'post',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        };

      return fetch(url, opt);
    },
    giveEvents: function (kolejka) {
      let json = JSON.parse(kolejka)

      let url = `${host}/give_events`,
        opt = {
          method: 'post',
          body: JSON.stringify(json),
          headers: {
            'Content-Type': 'application/json'
          }
        };
      return fetch(url, opt);
    },
    helloWorld: function () {
      let url = `${host}/`,
        opt = {
          method: 'get',
        };

      return fetch(url, opt);
    },
    giveNextTimeEvent: function () {
      let url = `${host}/give_next_time_event`,
        opt = {
          method: 'get'
        };

      return fetch(url, opt);
    },
    doNextEvent: function () {
      let url = `${host}/do_next_event`,
        opt = {
          method: 'get',
        };
      return fetch(url, opt);
    },
    parkingState: function (id) {
      let url = `${host}/parking_state/${id}`,
        opt = {
          method: 'get'
        };

      return fetch(url, opt);
    },
    parkingStatus: function (id) {
      let url = `${host}/parking_status/${id}`,
        opt = {
          method: 'get'
        };

      return fetch(url, opt);
    }
  }
};
