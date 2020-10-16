import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import mac from './mac.jpeg';

const Product = () => {
    return (
      <View style={{padding: 12, backgroundColor: '#e8e8e8', width: 212, borderRadius: 8, margin: 10}} >
          <Image source={mac} style={{ width: 188, height: 107, borderRadius: 8 }} />
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>Mac Baru</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f5d76e',
            marginTop: 12,
          }}> Rp. 20.000.000 </Text>
  
          <Text style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12
          }}>BEKASI</Text>
  
          <View style={{
            backgroundColor: '#29f1c3',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center'
            }}>Beli</Text>
          </View>
        </View>
    );
  }
  
  const style = StyleSheet.create({
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#29f1c3',
      marginLeft: 20,
      marginTop: 20,
    }
  });
  
export default Product;