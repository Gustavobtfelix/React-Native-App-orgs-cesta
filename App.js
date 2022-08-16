 //limitations of Expo: https://docs.expo.dev/introduction/why-not-expo/
import { StatusBar, SafeAreaView} from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'; //importando fonte do google
import AppLoading from 'expo-app-loading';


import Cesta from './src/telas/Cesta/index'; //importa arquivo js
import mock from './src/mocks/cestaMock'; //importa strings

export default function App() {  /* fonteCarregada esta exportando um get para ser usado quando for definir fontes nesse modelo        SafeAreaView(necessaria se for usar no IOS), statusBar(serve para a borda do aplicativo) Text são componentos do react-native. StatusBar e componente do expo-status-bar */ 
    const [fonteCarregada] = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
    });

    if(!fonteCarregada){  //acontece enquanto a fonte não carregar
      return <AppLoading /> 
    }
    return ( //SafeAreaView(necessaria se for usar no IOS), statusBar(serve para a borda do aplicativo) style flex: 1 (ocupa todo o espaço da tela)
      <SafeAreaView style={{ flex: 1}}> 
        <StatusBar />
        <Cesta {...mock} />
      </SafeAreaView>
    )
        //...mock é para passar todas as propriedades do mock para o componente Cesta
  }
