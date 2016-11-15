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
    alignItems: 'center',

  }
};
