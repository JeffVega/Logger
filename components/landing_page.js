import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TextInput} from 'react-native';
import BgImage from '../img/landing_bg.jpg';

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
       signU = function() {
            return {
                ...styles.signUp,
                opacity: 0.8,
            }

        }
       shower = function(){
            if(this.state.text === ""){
                return this.signU() 
            }
        }
    render(){

       
        return(
        <ImageBackground source={BgImage}  style={styles.bg}>
            <View style={styles.wrapper}>
            </View>
            <View style={styles.container}>
            <TextInput
        style={ this.shower()|| styles.signUp}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder={"Sign Up"}
      />
            <View >
                <Text>Already A User?

                    <Text>Login</Text>
                </Text>
                    
            </View>
            </View>
            
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    bg:{
        width:'100%',
        height:'100%',
        


    },
    wrapper: {
        ...StyleSheet.absoluteFillObject,
      
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    signUp:{
        width:"50%",
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor:'white',
        color: "black",
         
    }
  });
  