//This is an example code for Bottom Navigation//
import React, {Component} from 'react';

//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,Button } from 'react-native';
//import all the basic component we have used

export default class GroupScreen extends React.Component {
    //Profile Screen to show from Open profile button
    constructor(props) {
        super(props);
        this.state = { text: 'Test is running', desc: 'Testing continue',item:'' }
    }
    render() {
        return (
            <View style={styles.one}>
                <Text style={styles.one}>Group</Text>
                <Text style={styles.three}>Living Room </Text>
                <Text style={styles.three}>Kitchen </Text>
                <Text style={styles.three}>Bedroom</Text>
                <Text style={styles.two}>Schedule</Text>
                <Button title="Click to Test Move => " onPress={this.getData}/>
                <Text style={styles.two}>{this.state.text}</Text>
                <Text style={styles.two}>{this.state.desc}</Text>
                <Text style={styles.two}>{this.state.item}</Text>
            </View>
           
        );
    }
}

getData = async () => {
    fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
                this.setState({
                text:responseJson.title,
                desc:responseJson.decription,
                item:responseJson.movies[0].title,
            });

        })
        .catch((error) => {
            console.error(error);
        });
}



const styles = StyleSheet.create({
    one: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 25,
        alignItems: 'center',
    },
    two: {
       padding : 10,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
    },
    three: {

        borderBottomColor: 'black',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
       
    },
});
