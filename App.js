 //limitations of Expo: https://docs.expo.dev/introduction/why-not-expo/
import { StatusBar, SafeAreaView,} from 'react-native';

import Cesta from './src/telas/Cesta'; //importa arquivo js

export default function App() {  /* SafeAreaView(necessaria se for usar no IOS), statusBar(serve para a borda do aplicativo) Text são componentos do react-native. StatusBar e componente do expo-status-bar */
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
    </SafeAreaView>
  );
}

