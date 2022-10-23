
import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Welcome () {
    return (
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY"
            source={require('../../assets/Logo.png')}
            style={{width:'100%'}}
            
            />
        </View>


          <Animatable.View delay={600}animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Selecione seu perfil abaixo para acessar sua conta:</Text>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTextt}>Profissional</Text>  
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonn}>
              <Text style={styles.buttonText}>Responsável</Text>
            </TouchableOpacity>


          </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
   flex:1,
   backgroundColor:'#006557'

},
containerLogo:{ 
    flex:2,
    
},
containerForm:{
    flex:2,
    backgroundColor:'#FFF',
    paddingStart:'5%',
    paddingEnd:'5%'
},
title:{
    fontSize:20,
    marginTop:28,
    marginBottom:12,
},

button:{
    backgroundColor:'#ededf2',
    borderRadius:10,
    paddingVertical:15,
    width:'95%',
    alignSelf:'center',
    bottom:'25%',
    alignItems:"center",
    justifyContent:'center',
    shadowColor:'#1b325f',
    elevation:20,
    position:"absolute",

    
},
buttonText:{
color:'#e7edea',
fontSize:18,

},

buttonTextt:{                                   //Texto Profissioanal
    color:'#2b9eb3',
    fontSize:18,
    },

buttonn:{                                        //Responsável
    backgroundColor:'#038bbb',
    borderRadius:10,
    paddingVertical:15,
    width:'95%',
    alignSelf:'center',
    bottom:'50%',
    alignItems:"center",
    justifyContent:'center',
    position:"absolute",
    shadowColor:'#092b5a',
    elevation:25

},

})