/*import React from 'react';

const ParcelamentoPage = () => {
  const [produto, setProduto] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="à vista"
        />
        Pagamento à vista
      </label>
      <label>
        <input type="radio" onChange={handleChange} name="produto" value="1x" />
        1 X
      </label>
    </form>
  );
};

export default ParcelamentoPage;*/

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const ParcelamentoPage = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Parcelamento</Text>
        <TouchableOpacity onPress={() => navigate('OrcamentoPage')}>
          <Text style={styles.text2}>Pagamento à vista</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>2 x</Text>
        <Text style={styles.text2}>3 x</Text>
        <Text style={styles.text2}>4 x</Text>
        <Text style={styles.text2}>5 x</Text>
        <Text style={styles.text2}>6 x</Text>
        <Text style={styles.text2}>7 x</Text>
        <Text style={styles.text2}>8 x</Text>
        <Text style={styles.text2}>9 x</Text>
        <Text style={styles.text2}>10 x</Text>
        <Text style={styles.text2}>11 x</Text>
        <Text style={styles.text2}>12 x</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text1: {
    color: '#dee1dc',
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  text2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 15,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 350,
  },
});

export default ParcelamentoPage;
