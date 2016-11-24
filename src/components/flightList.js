import React from 'react';

import { Text,View } from 'react-native';
import Card from './card'
import CardSection from './cardSection';

export const FlightList = (props) => {
  console.log('propopopr',props.trips.toJS());
  // console.log('props',props.trips.get('tripOptions'))
  return (
    <View>
    <Text>
      Hello
    </Text>
    {props.trips.map(trip => {
      return(
        <Card>
          <CardSection>
            <Text>{trip.get('saleTotal')}</Text>
          </CardSection>
        </Card>
      )
    })}
      {/* {props.trips.toJS().map(trip=>{
        return(
          <Text key={trip.id}>
            {trip.saleTotal}
          </Text>
        )
      })} */}
    </View>
  );
};
