import React from 'react';

import {  Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const FlightDetail = ({ trip }) => {
console.log('flightdetai',trip);
  return (
      <Card>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text>{trip.get('saleTotal')}</Text>
          </View>
        </CardSection>
      </Card>
  );
}


const styles = {
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent:'space-around'
  },
  thumbailStyle: {
    height:50,
    width:50
  }
};

export default FlightDetail
