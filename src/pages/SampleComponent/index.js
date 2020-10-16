import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

  const SampleComponent = () => {
    return (
      <View style={{ backgroundColor:  '#19b5fe'}}>
        <Text> Muhamad </Text>
        <Text> Gilang </Text>
        <Text> Fikri </Text>
        <Last />
        <Picture />
        <TextInput style={{ borderWidth: 1 }} />
        <Box />
        <Profile />
      </View>
    );
  }
  const Last = () => {
    return <Text>AZI</Text>
  }
  
  const Picture = () => {
    return <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://placeimg.com/100/100/tech' }} />
  }
  
  class Box extends Component {
    render() {
      return <Text>Ini Box Component</Text>
    }
  }
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Picture />
          <Text>Ini Buat Profile</Text>
        </View>
      )
    }
  }
  
export default SampleComponent;