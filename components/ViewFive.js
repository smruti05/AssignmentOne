import React, {Component} from 'react';
import ViewTwo from "./ViewTwo";
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class ViewFive extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container_style}>
                <TouchableHighlight
                    style={styles.touchable_highlight_style}
                    onPress={() => {
                        this.props.onClick
                    }}>
                    <Text style={{backgroundColor:'green', color: 'white', alignItems: 'center'}}>Click One</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchable_highlight_style}
                    onPress={() => {
                        alert(this.state.textInput)
                    }}>
                    <Text style={{backgroundColor: 'red', color: 'white' , alignItems: 'center'}}>Click Two</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_style: {
        flex: 0.6,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e5e5ff'
    },
    touchable_highlight_style: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center'
    }
});
