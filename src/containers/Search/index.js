import React from 'react';

import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { FlightDatePicker } from '../../components/datePicker';
import DayPicker from '../../components/datePickerNew';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Button from 'apsl-react-native-button';


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

    const {
      handleWhereto,
      fetchFlights
    } = this.props.actions;
    // console.warn('state',this.props.reducer.toJS())
    return(
      <LinearGradient colors={['#fd746c', '#ff9068']} style={{ flex: 1 }}>
      <ScrollableTabView>
        <View tabLabel="Search" />
        <View tabLabel="Trips" />
      </ScrollableTabView>
      <View style={style.flightContainer}>
        <Text style={style.destinationText}>Where Are You Travelling?</Text>
        <TextInput
          onChangeText={(text) => handleWhereto(text)} />

        {this.renderDayPicker()}
      </View>
      <View>
        <Button onPress={fetchFlights.bind()}> Find Flights </Button>
      </View>

      </LinearGradient>
    )
  }
}


const style = {
  flightContainer: {
    flex: 1,
  },

  destinationText:{
    color:'#fff',
    textAlign:'center',
    fontSize:28
  }
}


function mapStateToProps({SearchReducer}) {
  return {
    reducer: SearchReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
