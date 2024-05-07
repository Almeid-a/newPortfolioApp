import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');
const smallerDevice = width < 400;

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
        <SafeAreaView className="flex-1">
          <ScrollView className="p-4">
            <View className="flex justify-center h-full w-full py-6">

              <View className="flex flex-row justify-center items-center">
                   <Text className="text-purple-500 mr-2" style={[styles.text, {fontSize: smallerDevice ? 34 : 40}]}>Dev</Text>
                   <Text className="text-white"  style={[styles.text, {fontSize: smallerDevice ? 34 : 40}]}>Almeida</Text>
              </View>

              <View className="items-center mt-4">
                <Image className="w-80 rounded-[30px]" style={{height: smallerDevice ? 260 : 290}} source={require('../images/Testefoto1.png')}/>
              </View>

              <View className="justify-center mt-6 items-center">
                <Text className="text-center text-white mb-2" style={[styles.text, {fontSize: smallerDevice ? 20 : 26}]}>Olá!{"\n"} Eu sou Gabriel de Almeida Rodrigues</Text>
                <Text className="text-center text-white mb-4" style={[styles.text, {fontSize: smallerDevice ? 18 : 22}]}>{typedText}</Text>
                <Text className="text-center text-white mb-4" style={[{fontSize: smallerDevice ? 16 : 20}]}>Tenho 24 anos e acabei de me formar no curso de Bacharelado em Engenharia de Software na Universidade Estadual de Ponta Grossa.</Text>
              </View>

              <Animatable.View animation="slideInRight" duration={1500} delay={100}>
                <View className="flex flex-row justify-around text-center mt-6">
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

            </View>
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
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 4,
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
