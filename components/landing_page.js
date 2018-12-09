import React from 'react'
import {StyleSheet, View, ImageBackground,  TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Text} from 'react-native-elements';
import BgImage from '../img/landing_bg.jpg';

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            password:""
        };
    }
    signU = function () {
        return {
            ...styles.signUp,
            opacity: 0.8
        }

    }
    shower = function () {
        if (this.state.text === "") {
            return this.signU()
        }
    }
    signUp = function (){
        
        
        if(this.state.text !== ''){
            
            return (
             <Input
                inputContainerStyle={this.shower() || styles.signUp}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder={"Password"}
                inputStyle={{
                color: "grey"
            }}
            leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='black'
                />
              }/>
            )
        }
    }
    render() {
            
        return (
        
            <ImageBackground source={BgImage} style={styles.bg}>
            <View style={styles.wrapper}/>
            
             <Text style={styles.banner}>Logger</Text>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
               
                    <Input
                        inputContainerStyle={this.shower() || styles.signUp}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder={"Sign Up"}
                        inputStyle={{
                        color: "grey"
                    }}
                    leftIcon={
                        <Icon
                          name='user'
                          size={24}
                          color='black'
                        />
                      }/>
                      {this.signUp()}
                </View>
                </TouchableWithoutFeedback>
                <View style={styles.loginInCenter}>
                    <Text style={styles.loginIn}>Already A User?</Text>

                       <Text style={styles.loginInLink}>Login</Text>
                     
                </ View>
               
                
            </ImageBackground>
            
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner:{
        textAlign:'center',
        fontSize: 36,
        color:"white",
        marginTop: 50
    },
    bg: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        ...StyleSheet.absoluteFillObject,

        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    signUp: {
        backgroundColor: 'white',
        borderRadius: 15

    },
    loginIn: {
        color: "white",
    },
    loginInLink:{
        color:'grey',
        
    },
    loginInCenter:{
        alignItems: 'center',
        bottom:20
    }
});
