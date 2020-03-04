//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity,FlatList, StyleSheet,Button,TextInput } from 'react-native';
//import all the basic component we have used
//import UniqueID from 'react-html-id';

export default class AddShutterScreen extends React.Component {
    //Profile Screen to show from Open profile button
    constructor(props) {
        super(props);
       // UniqueID.enableUniqueIds(this);
        this.list = [
            {
                name: '',
                macad: ''
            },
        ],
            this.state = {
            listHolder: [],
            textInput: '',
                macInput:'',
            }
        }
        
    componentDidMount() {

        this.setState({ listHolder: [...this.list] })

    }
    joinData = () => {

        this.list.push({ name: this.state.textInput , macad: this.state.macInput});

        this.setState({ listHolder: [...this.list] })

    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }
    GetItem(item) {

        Alert.alert(item);

    }
    
  render() {
      
        return (
            <View style={styles.two}>
                <Text style={styles.one}>Add Shutter </Text>
                <TextInput
                    placeholder='Name of shutter' style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                    defaultValue={this.state.value}
                    onChangeText={data => this.setState({ textInput: data })}
                />
                <TextInput
                    placeholder='mac address of shutter' style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                    defaultValue={this.state.value}
                    onChangeText={data => this.setState({ macInput: data })}
                />
               
                <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

                    <Text style={styles.buttonText}> Add Shutter To FlatList </Text>

                </TouchableOpacity>

                <FlatList

                    data={this.state.listHolder}

                    width='100%'

                    extraData={this.state.listHolder}

                   // keyExtractor={(index) => index.toString()}
                    keyExtractor={item => item.macad}

                    ItemSeparatorComponent={this.FlatListItemSeparator}

                    renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.name)} > {item.name} </Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    one: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 25,
    },
    two: {
        flex: 1,
        padding : 20,
        alignItems:'center',
    },
    three: {
        
        borderBottomColor:'black',
        padding: 10,
        alignItems: 'center',
    },
    MainContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 2

    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    textInputStyle: {

        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 7,
        marginTop: 12
    },

    button: {

        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        marginTop: 10
    },

    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
