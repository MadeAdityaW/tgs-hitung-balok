import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  Button,
  Text,
  TextInput,
  View } from 'react-native';
export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 0,
      l: 0,
      t: 0,
      v: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#9E9E9E' }}>
        <View style={{ backgroundColor: 'black' }}>
           <Text style={{ padding: 25, fontSize: 20, color: '#E91E63', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: 'white' }}>
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(p) => this.setState({ p })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(l) => this.setState({ l })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(t) => this.setState({ t })}
              keyboardType='numeric'
            />
            <Button
              onPress={() => this.setState({
                v: (this.state.p * this.state.l * this.state.t)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
        <View style={{ margin: 20, backgroundColor: '#E91E63' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white' }} >
              Panjang{'\t'}= {this.state.p} {'\n'}
              Lebar{'\t\t\t'}= {this.state.l} {'\n'}
              Tinggi{'\t\t'}= {this.state.t} {'\n'}
              Vol{'\t\t\t\t'}= {this.state.v}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
