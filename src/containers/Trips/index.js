import React from 'react';

import { Text, View } from 'react-native'


class Trips extends React.Component{
  render(){
    return(
      <View style={styles.tripContainer}>
        <Text style={styles.tripTextContainer}>Your booked trips will show here</Text>
        </View>
      )
  }
}

const styles = {
  tripContainer:{
    flex:1,
    alignItems:'center'
  },
  tripTextContainer:{
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
    fontSize:24
  }
}

export default Trips;
