import React , { Component } from 'react';
import { View,Text } from 'react-native';

import DatePicker from 'react-native-datepicker'


export const FlightDatePicker = (props) => (

  <DatePicker
    style={{width: 200}}
    date={props.data}
    mode="date"
    placeholder="select date"
    format="YYYY-MM-DD"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
      },
      dateInput: {
        marginLeft: 36
      }
      // ... You can check the source to find the other keys.
    }}
  // onDateChange={(date) => {this.setState({date: date})}}
  />
);
