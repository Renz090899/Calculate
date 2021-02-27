import React, { Component } from "react";
import { TextInput, Button } from "react-native-web";
//import React,{Component} from 'react';

export default class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0 };
  }

  Sum = () => {
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);

    var R = N1 + N2;
    alert(R);
  };

  render() {
    return (
      <view>
        <TextInput
          style={{ borderWidth: 1, margin: 10 }}
          placeholder="Num1"
          onChangeText={(Num1) => this.setState({ Num1 })}
        />
        <TextInput
          style={{ borderWidth: 1, margin: 10 }}
          placeholder="Num2"
          onChangeText={(Num2) => this.setState({ Num2 })}
        />
        <Button title="Sum" onPress={this.Sum} />
      </view>
    );
  }
}
