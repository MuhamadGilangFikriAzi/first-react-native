import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import SampleComponent from './sampleComponent';
import Product from './StylingReactNativeComponent';

const App = () => {
  return <StylingReactNative />
}

const StylingReactNative = () => {
  return (
    <View>         
      <Product />
      <ScrollView>
        <SampleComponent />
        <Product />
        <Product />
      </ScrollView>
    </View>

  );
}

const TestLayout = () => {
  return (
    <View>
      <Text style={style.text}>Kosong</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: '#19b5fe',
        borderWidth: 2, borderColor: '#24252a',
        marginTop: 20,
        marginLeft: 20,
      }} />
    </View>
  );
}


export default App;