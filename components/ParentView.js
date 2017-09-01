/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ViewOne from './ViewOne'
import ViewTwo from './ViewTwo'
import ViewThree from './ViewThree'
import ViewFour from './ViewFour'
import ViewFive from "./ViewFive";

import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

export default class AssignmentOne extends Component {
    constructor() {
        super()
        this.state = {text2: ""}
    }

    render() {
        return (
            <View style={styles.container}>
                <ViewOne/>
                <ViewTwo onChange={(text) => {
                    this.setState({text2:text})
                }}/>
                <ViewThree/>
                <ViewFour/>
                <ViewFive onClick={alert(this.state.text2)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
