import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import MYBUTTON from './COMPONENTS/MYBUTTON';
import MYLOGIN from './COMPONENTS/MYLOGIN';
import MYIMAG from './COMPONENTS/MYIMAG';

export default function App() {
  return (
    <View style={styles.container}>
      <MYIMAG />
      <Text style={styles.headerText}>ENTER YOUR CREDENTIALS!</Text>
      <MYLOGIN placeholder="Username or Email address" />
      <MYLOGIN placeholder="Password" secureTextEntry={true} />
      <MYBUTTON />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebcd',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    color: '#4169e1',
    fontFamily: 'system-ui',
  },
});