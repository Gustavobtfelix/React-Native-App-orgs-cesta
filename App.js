 //limitations of Expo: https://docs.expo.dev/introduction/why-not-expo/
import { StatusBar, SafeAreaView, View} from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold} from '@expo-google-fonts/montserrat'; //importando fonte do google

import Cesta from './src/telas/Cesta'; //importa arquivo js

export default function App() {  /* fonteCarregada esta exportando um get para ser usado quando for definir fontes nesse modelo        SafeAreaView(necessaria se for usar no IOS), statusBar(serve para a borda do aplicativo) Text são componentos do react-native. StatusBar e componente do expo-status-bar */ 
    const [fonteCarregada] = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
    });

    if(!fonteCarregada){
      return <View/>
    }
    return (
      <SafeAreaView>
        <StatusBar />
        <Cesta />
      </SafeAreaView>
    )

  }
