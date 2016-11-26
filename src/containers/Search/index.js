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
import { FlightList } from '../../components/flightList';
import { Spinner } from '../../components/spinner';
import Trips from '../Trips';


class Search extends React.Component {

  state = { showDayPicker:false };


  renderDayPicker(){
    if(this.state.showDayPicker === true){
      return (
        <DayPicker />

      )
    } else return null
  }

  renderSpinner(){
    if(this.props.reducer.get('isLoading') === true){
      return (
        <Spinner isLoading={this.props.reducer.get('isLoading')} />
      )
    } else return null
  }



  render(){

    const trips = this.props.reducer.get('tripOptions')
    const isLoading = this.props.reducer.get('isLoading')
    const {
      handleWhereto,
      fetchFlights
    } = this.props.actions;
    console.log('state',this.props.reducer.toJS())
    return(
      <LinearGradient colors={['#fd746c', '#ff9068']} style={{ flex: 1 }}>
      <View style={style.flightContainer}>
        <Text style={style.destinationText}>Where Are You Travelling?</Text>
        <TextInput
          onChangeText={(text) => handleWhereto(text)} />
          {this.renderDayPicker()}

        <FlightList trips={trips}/>
      </View>
      <View>
        {this.renderSpinner()}
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
    marginTop:30,
    color:'#fff',
    textAlign:'center',
    fontSize:28,
    justifyContent:'center'
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
