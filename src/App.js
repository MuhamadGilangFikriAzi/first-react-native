import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import PositionComponent from './pages/PositionComponent';


const App = () => {
  return <StylingReactNative />
}

const StylingReactNative = () => {
  return (
    <View>         
      {/* <Product /> */}
      <ScrollView>
        <SampleComponent />       
        <StylingComponent />
        <FlexBox />
        <PositionComponent />
        
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