import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Linking} from 'react-native';

const Certificado = ({ certificado }) => {
  const { nome, link } = certificado;

  const abrirCertificado = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity className="bg-slate-800 rounded mb-4 border border-white" onPress={abrirCertificado}>
      <View className="p-4">
        <Text className="text-center" style={styles.text}>{nome}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    text: {
      color: '#ffffff',
      fontFamily: 'Arvo-Bold',
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
      fontSize: 20
    },
  });

export default Certificado;