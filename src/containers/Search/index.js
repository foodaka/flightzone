import React from 'react';

import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


class Search extends React.Component {
  render(){
    return(
      <LinearGradient colors={['#fd746c', '#ff9068']} style={{ flex: 1 }}>
      <ScrollableTabView>
        <View tabLabel="Profile" />
        <View tabLabel="Trips" />
      </ScrollableTabView>
        <View>
          <Text>Search</Text>
        </View>
      </LinearGradient>
    )
  }
}


export default Search;
