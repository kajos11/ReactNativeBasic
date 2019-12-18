import React, { Component } from 'react';
import { render } from 'react-dom';
import { Image } from 'react-native';

export default class Banana extends Component {
    
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
          return (
            <Image source={pic} style={{width: 193, height: 110}}/>
          );
    }


  }