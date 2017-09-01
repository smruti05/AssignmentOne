import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Button,
    View
} from 'react-native';

export default class ViewTwo extends Component {
    constructor() {
        super()
        this.state = {text: ""}
    }

    render() {
        return (
            <View style={styles.container_style}>
                <TextInput
                    style={styles.input_text_style}
                    onChangeText={(text1) => {
                        this.props.onChange
                        this.setState({text: text1})
                    }
                    }/>
                <Button
                    style={styles.button_style}
                    title="Click"
                    onPress={() => {
                        alert(this.state.text)
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9999ff'
    },
    input_text_style: {
        width: 200
    },
    button_style: {
        width: 100
    }
});