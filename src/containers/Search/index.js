import React from 'react';

import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { FlightDatePicker } from '../../components/datePicker';
import DayPicker from '../../components/datePickerNew';

class Search extends React.Component {

  state = { showDayPicker:false };


  renderDayPicker(){
    if(this.state.showDayPicker === true){
      return (
        <DayPicker />

      )
    } else return null
  }

  render(){
    return(
      <LinearGradient colors={['#fd746c', '#ff9068']} style={{ flex: 1 }}>
      <ScrollableTabView>
        <View tabLabel="Search" />
        <View tabLabel="Trips" />
      </ScrollableTabView>
      <View style={style.flightContainer}>
      <TextInput />
        {this.renderDayPicker()}
      </View>

      </LinearGradient>
    )
  }
}


const style = {
  flightContainer: {
    flex: 1,
  }
}

export default Search;
