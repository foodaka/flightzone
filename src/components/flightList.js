import React from 'react';

import { Text,ScrollView } from 'react-native';
import Card from './card'
import CardSection from './cardSection';

export const FlightList = (props) => {
  console.log('propopopr',props.trips.toJS());
  console.log('props',props.trips.get('tripOptions'))
  return (
    <ScrollView>

    {props.trips.map(trip => {
      console.log('aa',trip.getIn(['slice',0,'duration']));
      return(
        <Card>
          <CardSection>
            <Text style={{flex:1}}>Total:{trip.get('saleTotal')}</Text>
            <Text style={{flex:1}}>Duration:{trip.getIn(['slice',0,'duration'])}</Text>
            <Text style={{flex:1}}>Carrier:{trip.getIn(['slive',0,'segment',0,'flight','carrier'])}</Text>

          </CardSection>
        </Card>
      )
    })}
    </ScrollView>
  );
};
