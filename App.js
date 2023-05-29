import { useState } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, StatusBar } from 'react-native';
import Contact from './components/Contact';


export default function App() {
  const [searchText, setSearchText] = useState('');

  
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        animated={true}
        backgroundColor="#a3c4f3"
        
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Contact"
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor="#888"
        />
      </View>
      <Contact searchText={searchText}/>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  safeView:{
    flex:1
  },
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },

});
