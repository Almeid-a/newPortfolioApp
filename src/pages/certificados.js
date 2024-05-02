import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import Certificado from '../ui/CertificadosComponents.js'

class Certificados extends Component {

  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    this.state = {
      certificadoSelecionado: null,
      certificados: [
        { 
          nome: 'TecWeek',
          link: 'https://drive.google.com/file/d/14oHeDiqLt3cohyavAuqfJfpWWuL4WKZY/view'
        },
        { 
          nome: 'Lógica de Programação',
          link: 'https://drive.google.com/file/d/1GUxJizVFfxIyb7kY3ScnbdTW5mARTTX6/view'
        },
        { 
          nome: 'Fundamentos de TI',
          link: 'https://drive.google.com/file/d/1JchSdOnqk_yA0LQ8G4UQpYSVd4nYdmRL/view'
        },
        { 
          nome: 'Cultura Digital',
          link: 'https://drive.google.com/file/d/1Xha6Kgsnabti0fu32Z-Pap4AmHqOVFPU/view'
        },
        { 
          nome: 'Projetos de Sistema de TI',
          link: 'https://drive.google.com/file/d/17DvsTG1i3PDK6Rqh0tBB0-XCM8Ly-PsS/view'
        },
        { 
          nome: 'HTML',
          link: 'https://drive.google.com/file/d/1Fifb0VWx0kyMfnuCJJhH2Z4MpvCE8owq/view'
        },
        { 
          nome: 'POO',
          link: 'https://drive.google.com/file/d/1C2qlPJbB_O5JR3qOBU6m75PMdtxlChVH/view'
        },
        { 
          nome: 'Python Básico',
          link: 'https://drive.google.com/file/d/1fgG-6PEHni9g9Z84ym-DqCoMVE9qyx4j/view'
        },
        { 
          nome: 'Python POO',
          link: 'https://drive.google.com/file/d/1bY1qod5eSFypxa9riGWjtoi5yePfLV6k/view'
        },
        { 
          nome: 'Python Interface',
          link: 'https://drive.google.com/file/d/1ZzKOYOZX-u1fB0E50MGUfZRMKPQBPfda/view'
        },
        { 
          nome: 'Excel 2016 - Básico',
          link: 'https://drive.google.com/file/d/1R8o_4-WvLWUy2Rx9mP3TcGR1PEBUyd8c/view'
        },
        { 
          nome: 'Excel 2016 - Intermediário',
          link: 'https://drive.google.com/file/d/12uHOAVqrVxIUc6R-pJHWw4PX92baL1Uj/view'
        },
      ]
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      if (this.scrollViewRef.current) {
        this.scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
      }
    });
  }

  render() {
    return (
      <ImageBackground className="flex-1" source={require('../images/background.png')}>
        <SafeAreaView>
          <ScrollView className="p-4 mb-4" ref={this.scrollViewRef}>
            <View>
              <Animatable.Text
                  className="text-center mb-8"
                  animation="fadeIn"
                  easing="ease-in"
                  duration={2000}
                  style={[styles.titulo]}>
                  FORMAÇÃO
              </Animatable.Text>
            </View>

            <View className="mb-4">
              <Animatable.Text
                  className="text-center"
                  animation="fadeInLeft"
                  easing="ease-in"
                  duration={1500}>
                <Text style={styles.text}>Bacharelado em Engenharia de Software</Text>
              </Animatable.Text>
            </View>

            <View className="mb-10">
              <Animatable.Text
                  className="text-center"
                  animation="fadeInLeft"
                  easing="ease-in"
                  duration={1500}>
                <Text style={[styles.text, {fontSize: 17}]}>Universidade Estadual de Ponta Grossa</Text>
              </Animatable.Text>
            </View>

            <Animatable.Text
                className="text-center mb-8"
                animation="fadeIn"
                easing="ease-in"
                duration={2000}
                style={[styles.titulo]}>
                CERTIFICADOS
            </Animatable.Text>
            
            <Animatable.View
              animation="slideInRight"
              easing="ease-in"
              duration={1500}>
               {this.state.certificados.map((certificado, index) => (
                <Certificado key={index} certificado={certificado} />
              ))}
            </Animatable.View>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    color: '#ffffff',
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#6b21a8',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
    fontSize: 35
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 20
  },
});

export default Certificados;