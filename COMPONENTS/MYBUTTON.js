import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet} from 'react-native';

export default function MYBUTTON() {
  return (
    <Button style={{fontSize: 20, color: 'green'}} title="LOGIN">
      SUBMIT
    </Button>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '100%',
    backgroundColor: '#a0522d',
    margin: 10,
  },
});