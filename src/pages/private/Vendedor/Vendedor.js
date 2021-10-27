import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Foto from '../../../components/public/assets/foto-adulto-m.png';
import {useNavigation} from '@react-navigation/native';
import HTTPClient from '../../../server';
import {ModalCenter} from '../../../components/common';

const Vendedor = () => {
  const {navigate} = useNavigation();

  const [state, setState] = useState([]);
  const [stateCalc, setStateCalc] = useState({
    suggestedPriceManufactures: '',
    minimalSaleValue: '',
  });
  console.log(stateCalc, '');

  const [modalVisible, setModalVisible] = useState(false);

  console.log(state, 'state');
  const getOrcamento = async () => {
    try {
      const {data} = await HTTPClient.get('/v1/quotations');
      setState(data.quotations);
    } catch (e) {
      Toast.show({
        title: 'Aviso!',
        text: e.response.data.errors[0],
        color: '#E74C3C',
      });
    }
  };

  useEffect(() => {
    getOrcamento();
  }, []);

  const handleCalcMinSaleValue = async () => {
    try {
      const {data} = await HTTPClient.get(
        `/v1/new_quotation?value=${stateCalc.suggestedPriceManufactures}`,
      );
      setStateCalc({
        ...stateCalc,
        minimalSaleValue: data.quotations.minimal_sale_value,
      });
      console.log(data, 'data');
    } catch (e) {
      Toast.show({
        title: 'Aviso!',
        text: e.response.data.errors[0],
        color: '#E74C3C',
      });
    }
    Flat;
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonexit}>
          <Text style={styles.textButtom}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Image source={Foto} style={{width: 150, height: 150}} />
      <Text style={styles.textButtom}>Vendedor</Text>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textButtom}>+ Gerar novo orçamento</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text1}>Orçamentos Realizados</Text>
      </View>

      <FlatList
        data={state}
        keyExtractor={item => `flat-list-${item.value}`}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigate('OrcamentoPage', item)}>
            <Text style={styles.text2}>{item.id}</Text>
          </TouchableOpacity>
        )}
      />

      <ModalCenter
        visible={modalVisible}
        actionClose={() => setModalVisible(false)}
        state={{values: stateCalc, action: setStateCalc}}
        actionCalc={() => handleCalcMinSaleValue()}
        actionNext={() => {
          setStateCalc({
            suggestedPriceManufactures: '',
            minimalSaleValue: '',
          });
          navigate('OrcamentoPage', {stateCalc});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#282c2b',
    padding: 1,
    marginTop: 10,
    borderRadius: 10,
    width: 350,
  },
  buttonexit: {
    alignItems: 'flex-end',
    backgroundColor: '#282c2b',
    marginLeft: 300,
    borderRadius: 10,
  },
  textButtom: {
    color: '#dee1dc',
    fontSize: 20,
    margin: 5,
  },
  text1: {
    color: '#dee1dc',
    fontSize: 18,
    marginTop: 25,
  },
  text2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 350,
    textAlign: 'center',
  },
});

export default Vendedor;
