import React from 'react';
import ReactDom from 'react-dom';
//import ToggleSwitch from 'toggle-switch-react-native'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    //CheckBox,

} from 'react-native';
//import ToggleSwitch from './ToggleSwitch'
//import Icon from  'react-native-vector-icons/MaterialIcons';
//import Switch from './Switch'


export default class Note extends React.Component {
    constructor() {
        super()
        this.state = {
            checked: false
             
        }}

       


    render() {
        

        return (
            <View key={this.props.keyval} style={styles.note}>

                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                
            
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#7B2F2F',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    },
});

//ReactDom.render(<App/>, document.getElementById ('root'))