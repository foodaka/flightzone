import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Button from 'apsl-react-native-button';
import { Spinner } from '../../components/spinner';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { FlightDatePicker } from '../../components/datePicker';


 class Welcome extends React.Component{
   constructor(props){
     super(props)
     this.state = {date:"2016-05-15"}
   }

  componentWillMount(){
    // this.props.actions.fetchFlights()
  }

  flip(){
    this.props.actions.flip()
  }

  render() {

    console.warn(this.props.reducer.get('isLoading'))
    return (

      <LinearGradient colors={['#fd746c', '#ff9068']} style={{ flex: 1 }}>
        {/* <Spinner isLoading={this.props.reducer.get('isLoading')} /> */}
        <View style={styles.titleContianer}>
          <Text style={styles.title}>
            Roam
          </Text>
          <Text style={styles.subTitle}>
            Travel For Backpackers
          </Text>
        </View>
        <View style={styles.dateSelection}>
          <FlightDatePicker date={moment().format('YYYY-MM-DD')} />
          <FlightDatePicker date={moment().format('YYYY-MM-DD')} />

        </View>
        <View style={{ padding: 30 }}>
        <Button
         style={styles.button} onPress={this.flip.bind(this)} textStyle={{fontSize: 18}} >
          Hello!
        </Button>
        </View>
      </LinearGradient>
    )
  }
}

function mapStateToProps({welcomeReducer}) {
  return {
    reducer: welcomeReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {

    fontSize: 48,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },

  subTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },

  dateSelection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});
