import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class FlaxBox extends Component{
    render() {
        return (
            <View>
                <View style={{
                flexDirection: 'row',
                backgroundColor: 'grey',
                alignItems: "flex-end",
                justifyContent: "space-between",

                }}>                
                    <View style={{backgroundColor: 'red',flex: 1, height: 100}}></View>
                    <View style={{backgroundColor: 'yellow',flex: 2, height: 150}}></View>
                    <View style={{backgroundColor: 'green',flex: 3, height: 200}}></View>
                    <View style={{backgroundColor: 'blue',flex: 4, height: 250}}></View>
                </View>
            
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>                        
                </View>            

                <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <Image source={{ uri: 'http://placeimg.com/640/480/tech' }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Gilang</Text>
                        <Text>156 rb sub</Text>
                    </View>
                </View>
            </View>
        );
    }
}