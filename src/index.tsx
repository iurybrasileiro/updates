import 'expo-dev-client';
import 'expo-asset';

import React from 'react';
import {View, Text, Image} from 'react-native';
import {SvgCssUri} from 'react-native-svg';

const URI =
  'https://storage.googleapis.com/fluyo_assets/languages/german-flag.svg';

export default function Main() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Iury Brasileiro</Text>

      <Image
        width={150}
        height={150}
        source={require('./assets/cyberangels.png')}
      />

      <SvgCssUri style={{width: 45, height: 45}} uri={URI} />
    </View>
  );
}
