import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'

class Profile extends React.Component{
    state = {
        name:'',

        age:'',

        job:''
    }

    handleSubmit(){
        Alert.alert ('- - - -Your Information - - - -',
        
        `Name: ${this.state.name},
        
         Age: ${this.state.age}, 
        
         Job: ${this.state.job}`)

    }

    render (){
        console.log(this.state)
        return(
            <View style={Styles.viewBackgroud}>
                <Text style={Styles.textWelcome}>=Welcome=</Text>
                <Text style={Styles.textInformation}> - = - = Informations = - = - </Text>
                
                <View style={Styles.viewData}>
                    
                    <Text style={Styles.TextUp}>{this.state.name } </Text>
                    <Text style={Styles.textInfo}>\_____________ Name _____________/</Text>
                    <TextInput 
                    style={Styles.inputInfo} 
                    placeholder = "- - - - Your Name - - - -"
                    onChangeText={(text) => this.setState( {name:text})}
                    />

                    <Text style={Styles.TextUp}>{this.state.age}</Text>
                    <Text style={Styles.textInfo}>\_____________ Age _____________/</Text>
                    <TextInput 
                    style={Styles.inputInfo} 
                    placeholder = "- - - - Your Age - - - -"
                    onChangeText={(text) => this.setState( {age:text})}
                    />

                    <Text style={Styles.TextUp}>{this.state.job}</Text>
                    <Text style={Styles.textInfo}> \_____________ Job _____________/</Text>
                    <TextInput 
                    style={Styles.inputInfo} 
                    placeholder = "- - - - Your Job - - - -"
                    onChangeText={(text) => this.setState( {job:text})}
                    />

                    <TouchableOpacity style={Styles.buttonSubmit} onPress = {() => this.handleSubmit()}>
                        <Text style={Styles.textSubmit}>- - Send - -</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    viewBackgroud:{
        flex: 1,
        backgroundColor:'#19181F',
        alignItems:'center',
   },
   textWelcome:{
       color:'#fff',
       fontSize:64,
  },
  textInformation:{
      color:'#fff',
      fontSize:24,
      marginTop: 84,
  },
  textInfo:{
      color:'#fff',
      fontSize: 20,
      textAlign:'center'
  },
  inputInfo:{
      backgroundColor:'#676280',
      borderRadius: 40,
      textAlign:'center',
      width:'80%',
      marginBottom: 24
  },
  viewData:{
      width:'100%',
      alignItems:'center',
      marginTop: 80
  },
  buttonSubmit:{
      backgroundColor:'#333140',
      padding: 20,
      borderRadius:40,
      width:'40%',
      alignItems:'center',
      marginTop:30
  },
  textSubmit:{
      color:'#fff',
      fontSize:22,
  },
  TextUp:{
    color:'#fff',
    fontSize:20
},
  
})
export default Profile