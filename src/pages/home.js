import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable';

class HomeScreen extends Component {
  state = {
    fontLoaded: false,
    typedText: '',
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Arvo-Bold': require('../../assets/fonts/Arvo-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });

    this.animateText();
  }

  animateText = () => {
    const fullText = "Desenvolvedor Front-End";
    let currentIndex = 0;
    const typingSpeed = 100;

    setInterval(() => {
      if (currentIndex <= fullText.length) {
        this.setState({ typedText: fullText.slice(0, currentIndex) });
        currentIndex++;
      }
    }, typingSpeed);
  };

  render() {
    const { fontLoaded, typedText } = this.state;

    if (!fontLoaded) {
      return null;
    }

    return (
      <ImageBackground className="flex-1" source={require('../images/background.png')}>
        <SafeAreaView>
          <ScrollView className="p-4">
            <View className="flex flex-row justify-center items-center mb-4">
              <Text className="text-purple-500 mr-2" style={[styles.text, { fontSize: 40 }]}>Dev</Text>
              <Text className="text-white"  style={[styles.text, { fontSize: 40 }]}>Almeida</Text>
            </View>

            <View className="items-center">
              <Image source={require('../images/Testefoto1.png')} className="w-80 h-72 rounded-[50px] mb-8" />
              <View className="flex-1 justify-cente">
                <Text className="text-center text-white mb-2" style={[styles.text, { fontSize: 26 }]}>Olá! Eu sou Gabriel de Almeida Rodrigues</Text>
                <Text className="text-center text-white mb-8" style={[styles.text, { fontSize: 24 }]}>{typedText}</Text>
                <Text className="text-lg text-white text-center mb-2" style={[styles.text, {fontSize: 16}]}>Tenho 24 anos e acabei de me formar no curso de Bacharelado em Engenharia de Software na Universidade Estadual de Ponta Grossa.</Text>
              </View>
            </View>

            <Animatable.View animation="slideInRight" duration={1500} delay={100}>
              <View className="flex flex-row justify-around mt-6">
                <TouchableOpacity onPress={abrirCV}>
                  <View className="border border-white rounded-full p-3">
                    <Ionicons name="document-text" size={25} color={'white'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={abrirGitHub}>
                  <View className="border border-white rounded-full p-3">
                    <Ionicons name="logo-github" size={24} color={'white'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={abrirLinkedIn}>
                  <View className="border border-white rounded-full p-3">
                    <Ionicons name="logo-linkedin" size={24} color={'white'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={linkWhatsapp}>
                  <View className="border border-white rounded-full p-3">
                    <Ionicons name="logo-whatsapp" size={24} color={'white'} />
                  </View>
                </TouchableOpacity>
              </View>
            </Animatable.View>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },
});

const abrirLinkedIn = () => {
  const url = 'https://www.linkedin.com/in/almeiida/';
  Linking.openURL(url);
};

const abrirGitHub = () => {
  const url = 'https://github.com/Almeid-a';
  Linking.openURL(url);
};

const abrirCV = () => {
  const url = 'https://drive.google.com/file/d/1Q63M2I3Rd6hErFnYlMd9QHSVEftlXU0i/view';
  Linking.openURL(url);
};

const linkWhatsapp = () => {
  const numero = '5542998353821';
  const mensagem = 'Olá! Estou entrando em contato através do seu aplicativo.';

  const link = `whatsapp://send?phone=${numero}&text=${mensagem}`;

  Linking.openURL(link);
};

export default HomeScreen;
