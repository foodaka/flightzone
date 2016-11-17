import React, { Component } from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

export const Spinner = ({ isLoading }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator animating={isLoading} size={'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor:'black',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,

  }
};
