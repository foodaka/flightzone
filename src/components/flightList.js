import React from 'react';

import { Text,View } from 'react-native';


export const FlightList = (props) => {
  console.log('propopopr',props);
  console.log('props',props.trips.get('tripOptions'))
  return (
    <View>
    <Text>
      Hello
    </Text>
      {props.trips.toJS().map(trip=>{
        return(
          <Text>
            {trip.saleTotal}
          </Text>
        )
      })}
    </View>
  );
};
