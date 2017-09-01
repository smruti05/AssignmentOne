import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Picker,
    View
} from 'react-native';

export default class ViewOne extends Component {

    constructor() {
        super()
        this.state = {item:""}
    }

    render() {
        return (
            <View style={styles.container_style}>
                <Picker
                    style={styles.picker_style}
                    selectedValue={this.state.item}
                    onValueChange={(itemValue, itemIndex) => this.setState({item: itemValue})}>
                    <Picker.Item label="Item 1" value="item_one" />
                    <Picker.Item label="Item 2" value="item_two" />
                    <Picker.Item label="Item 3" value="item_three" />
                    <Picker.Item label="Item 4" value="item_four" />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    picker_style: {
        width:200,
        margin:10,
        color:'white'
    },
    container_style: {
        backgroundColor: '#7f7fff'
    }
});