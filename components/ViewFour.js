import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Button,
    View
} from 'react-native';

export default class ViewFour extends Component {

    constructor() {
        super()
        this.state = {firstNameInputValue: "", lastNameInputValue: ""}
    }

    render() {
        return (
            <View style={styles.container_style}>
                <View style={styles.view_style}>
                    <TextInput
                        style={styles.general_style + {alignItems: 'flex-start'}}
                        onChangeText={(firstName) => {
                            this.setState({firstNameInputValue: firstName})
                        }}/>

                    <TextInput
                        style={styles.general_style + {alignItems: 'flex-end'}}
                        onChangeText={(lastName) => {
                            this.setState({lastNameInputValue: lastName})
                        }}/>
                </View>
                <View style={styles.button_view_style}>
                    <Button
                        title="Submit"
                        onPress={() => {
                            alert('Full Name = '.concat(this.state.firstNameInputValue, " ", this.state.lastNameInputValue))
                        }}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container_style: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ccccff'
    },
    view_style: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    button_view_style: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    button_style: {
        color: '#ffffff'
    },
    general_style: {
        flex: 0.3,
        marginRight: 100,
        justifyContent: 'center'
    }
});