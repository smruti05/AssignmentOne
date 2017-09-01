import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Button,
    View
} from 'react-native';

export default class ViewThree extends Component {

    constructor() {
        super()
        this.state = {textInputValue: ""}
    }

    render() {
        return (
            <View style={styles.container_style}>
                <TextInput style={styles.text_input_style}
                           onChangeText={(inputValue) => {
                               this.setState({textInputValue: inputValue})
                           }}/>
                <Button
                    title="Click"
                    style={styles.button_style}
                    onPress={()=>{alert(this.state.textInputValue)}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b2b2ff'
    },
    text_input_style: {
        width: 200,
        alignContent: 'center'
    },
    button_style: {
        color: '#ffffff'
    }
});
