import React from 'react';

import { View, StyleSheet } from 'react-native';
import Search from '../Search';
import Trips from '../Trips';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


class Main extends React.Component{
  render(){
    return(
        <ScrollableTabView style={style.tabColor}>
          <Search tabLabel="Search" />
          <Trips tabLabel="Trips" />
        </ScrollableTabView>
    )
  }
}

const style = {
  tabColor:{
    backgroundColor:'#fd746c'
  }
}
export default Main;
