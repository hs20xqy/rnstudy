
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FirstHomePage extends Component {
    static defaultProps = {
        title: 'hs'
    }
    render(){
        return(
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        );
    }
}