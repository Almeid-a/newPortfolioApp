import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const ProjectModal = ({ projeto, onClose }) => {

  const abrirProjeto = () => {
    // Abre o link do projeto no navegador externo
    Linking.openURL(projeto.link);
  };

  const renderItem = ({ item }) => (
    <View className="rounded-xl items-center">
      <Image className="w-[345px] h-[250px] rounded mb-2" source={item} resizeMode="cover"/>
    </View>
  );

  return (
    <SafeAreaView className="flex justify-center items-center">
      <ScrollView className="flex-1">
        <View className="flex justify-center text-center items-center border-2 border-black rounded">
          <View className= "bg-slate-100 rounded items-center">
            <Text className="mb-1" style={styles.title}>{projeto.nome}</Text>
            <Text className="mb-1">Deslize para ver mais imagens</Text>
            <Carousel
              data={projeto.imagens}
              renderItem={renderItem}
              itemWidth={350}
              itemHeight={200}
              sliderWidth={350}
              sliderHeight={200}
              layout={'default'}
              loop={false}
              enableSnap={false}
              snapToInterval={350} // Definindo snapToInterval igual ao itemWidth
            />
            <Text className="mb-1 text-center" style={styles.title}>{projeto.tecnologias}</Text>
            <Text className="mb-1 text-center p-2">{projeto.descricao}</Text>
            <View className="flex flex-row gap-5 mb-2">
              <TouchableOpacity className="bg-green-700 py-3 px-6 rounded" onPress={abrirProjeto}>
                <Text style={styles.text}>Abrir Projeto</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-700 py-3 px-6 rounded" onPress={onClose}>
                <Text style={styles.text}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Arvo-Bold',
    fontSize: 20
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Arvo-Bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 16
  },
});

export default ProjectModal;
