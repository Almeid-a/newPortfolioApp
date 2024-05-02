import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet , ImageBackground, TouchableOpacity, Image, Modal, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProjectModal from '../modal/ActionModal.js'
import * as Animatable from 'react-native-animatable';

class Projetos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      projetoSelecionado: null,
    };
    this.scrollViewRef = React.createRef();
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      if (this.scrollViewRef.current) {
        this.scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
      }
    });
  }

  abrirModal = (projeto) => {
    this.setState({ modalVisible: true, projetoSelecionado: projeto });
  };

  fecharModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible, projetoSelecionado } = this.state;
    return (
      <ImageBackground className="flex-1" source={require('../images/background.png')}>
        <SafeAreaView>
          <ScrollView className="p-4 mb-4" ref={this.scrollViewRef}>
            <View className="flex flex-row justify-center items-center mb-4">
            <Animatable.Text
                  className="text-center mb-4"
                  animation="fadeIn"
                  easing="ease-in"
                  duration={2000}
                  style={[styles.titulo]}>
                  MEUS PROJETOS
              </Animatable.Text>
            </View>

            <View className="flex-1">
               <Animatable.View
              animation="slideInLeft"
              easing="ease-in"
               duration={1500}>
                <TouchableOpacity className="bg-slate-800 rounded mb-4 border border-white" onPress={() => this.abrirModal({ 
                  nome: 'PROJETO HBO',
                  descricao: 'Trata-se de um site dedicado às séries de sucesso da HBO, fornecendo uma breve descrição de cada uma.\n\nOs fãs de séries encontrarão neste projeto uma maneira fácil e organizada de descobrir informações sobre seus programas favoritos, ajudando a tornar a experiência de assistir ainda mais envolvente e informativa.',
                  tecnologias: 'HTML, CSS e JavaScript',
                  imagens: [
                    require('../images/hbo.png'),
                    require('../images/hbo2.png'),
                  ],
                  link: 'https://hbo-series.vercel.app'
                })}>
                  <Image source={require('../images/teste.jpg')} className="w-full h-64 mb-2" />
                  <Text className="text-center mb-2" style={[styles.text, { fontSize: 20 }]}>PROJETO HBO</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-slate-800 rounded mb-4 border border-white" onPress={() => this.abrirModal({ 
                  nome: 'PROJETO HAMBURGUERIA',
                  descricao: 'Trata-se de um site para uma hamburgueria, projetado para simplificar o processo de pedido.\n\nOs clientes podem fazer seus pedidos de forma rápida e conveniente, e os pedidos são automaticamente encaminhados para o WhatsApp da hamburgueria, facilitando a comunicação e agilizando o atendimento.',
                  tecnologias: 'HTML, CSS (Tailwind) e JavaScript',
                  imagens: [
                    require('../images/Hamburgueria.png'),
                    require('../images/Hamburgueria2.png'),
                    require('../images/Hamburgueria3.png'),
                    require('../images/Hamburgueria4.png'),
                    require('../images/Hamburgueria5.png'),
                    require('../images/Hamburgueria6.png'),
                  ],
                  link: 'https://hamburgueria-project.vercel.app'
                })}>
                  <Image source={require('../images/Hamburgueria.png')} className="w-full h-64 mb-2" />
                  <Text className="text-center mb-2" style={[styles.text, { fontSize: 20 }]}>PROJETO HAMBURGUERIA</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-slate-800 rounded mb-4 border border-white" onPress={() => this.abrirModal({ 
                  nome: 'APP - Cronometro',
                  descricao: 'Trata-se de um aplicativo de cronômetro que oferece a funcionalidade de salvar cada intervalo de tempo registrado em um histórico.\n\nIsso permite aos usuários acompanhar e revisitar seus registros anteriores, fornecendo uma visão detalhada do tempo decorrido em diferentes momentos. ',
                  tecnologias: 'React Native e AsyncStorage',
                  imagens: [
                    require('../images/Cronometro.jpg'),
                    require('../images/Cronometro2.jpg'),
                  ],
                  link: 'https://github.com/Almeid-a/cronometroApp'
                })}>
                  <Image source={require('../images/Cronometro.jpg')} className="w-full h-64 mb-2" />
                  <Text className="text-center mb-2" style={[styles.text, { fontSize: 20 }]}>APP - CRONOMETRO</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-slate-800 rounded mb-4 border border-white" onPress={() => this.abrirModal({ 
                  nome: 'APP - Biscoito da Sorte',
                  descricao: 'O aplicativo simula a experiência de abrir um biscoito da sorte, apresentando mensagens aleatórias para o usuário.\n\n Com uma abordagem leve e divertida, é uma aplicação perfeita para dispositivos móveis, proporcionando momentos de entretenimento e surpresa aos usuários.',
                  tecnologias: 'React Native e Propriedades Component State.',
                  imagens: [
                    require('../images/BiscoitoSemQuebrar.jpg'),
                    require('../images/BiscoitoSorte.jpeg'),
                  ],
                  link: 'https://github.com/Almeid-a/BiscoitoApp'
                })}>
                  <Image source={require('../images/BiscoitoSorte.jpeg')} className="w-full h-64 mb-2" />
                  <Text className="text-center mb-2" style={[styles.text, { fontSize: 20 }]}>APP - BISCOITO DA SORTE</Text>
                </TouchableOpacity>
              </Animatable.View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={this.fecharModal}>
              <TouchableWithoutFeedback onPress={this.fecharModal}>
                <View className="flex-1 -z-1 bg-black opacity-90"/>
              </TouchableWithoutFeedback>
              <View className="flex absolute mt-[30%] justify-center items-center">
                <ProjectModal projeto={projetoSelecionado} onClose={this.fecharModal} />
              </View>
            </Modal>
          </View>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  titulo: {
    color: '#FFFFFF',
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#6b21a8',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
    fontSize: 35
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
    fontSize: 20
  },
});

export default Projetos;