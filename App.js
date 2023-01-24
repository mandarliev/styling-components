import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon Restaurant</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CE14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 24,
    marginTop: 16,
    paddingVertical: 1,
    borderWidth: 2,
    borderColor: '#495E57',
    borderRadius: 4,
    backgroundColor: '#495E57',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
