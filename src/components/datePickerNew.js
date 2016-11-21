import React from 'react';
import {
    View,
    StyleSheet,
    AppRegistry
} from 'react-native';

import Calendar from 'react-native-day-picker';



class DayPicker extends React.Component {
    render() {
        var from = new Date();
        from.setDate(from.getDate() - 16);
        var to = new Date();

        var startDate = new Date();
        startDate.setMonth(startDate.getMonth() + 1);

        return (
            <View style={styles.container}>
                <Calendar
                    monthsCount={24}
                    startFormMonday={true}
                    startDate={startDate}
                    selectFrom={from}
                    selectTo={to}
                    width={350}
                    onSelectionChange={(current, previous) => {
                        console.log(current, previous);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    }
});

export default DayPicker
