import React from 'react';

import { Text,ScrollView } from 'react-native';
import Card from './card'
import CardSection from './cardSection';

export const FlightList = (props) => {
  console.log('propopopr',props.trips.toJS());
  // console.log('props',props.trips.get('tripOptions'))
  return (
    <ScrollView>

    {props.trips.map(trip => {
      return(
        <Card>
          <CardSection>
            <Text>{trip.get('saleTotal')}</Text>
            <Text>{trip.getIn(['slice',0,'duration'])}</Text>
            <Text>{trip.getIn(['slive',0,'segement',0,'flight','carrier'])}</Text>
          </CardSection>
        </Card>
      )
    })}
    </ScrollView>
  );
};
