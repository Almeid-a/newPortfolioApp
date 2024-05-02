import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export const FONTFAMILY = {
  Arvo: {
    require: require("./assets/fonts/Arvo.ttf"),
    style: { fontFamily: 'Arvo' }
  },
  ArvoBold: {
    require: require("./assets/fonts/Arvo-Bold.ttf"),
    style: { fontFamily: 'ArvoBold'}
  }
};

export const FontLoader = ({ children, fontFamily, theme, color, size, alinhamento }) => {
  if (!theme || !theme[fontFamily]) return null; // Verifica se o theme ou a fontFamily não estão definidos

  const [fontsLoaded] = useFonts({
    [fontFamily]: theme[fontFamily].require,
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Text style={{ ...theme[fontFamily].style, color: color, fontSize: size, justifyContent: alinhamento}}>{children}</Text>
    </View>
  );
};
