import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Share,
  Button,
} from 'react-native';
import Foto from '../../../components/public/assets/foto-adulto-m.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import HTTPClient from '../../../server';

const QuotationPage = () => {
  const {navigate} = useNavigation();
  const {params} = useRoute();
  console.log('params', params);

  const [state, setState] = useState({
    id: null,
    name: '',
    suggestedPriceManufactures: '',
    minimalSaleValue: '',
  });

  useEffect(() => {
    if (params && params.stateCalc) {
      setState({
        ...state,
        suggestedPriceManufactures:
          params?.stateCalc?.suggestedPriceManufactures,
        minimalSaleValue: params?.stateCalc?.minimalSaleValue,
      });
    } else {
      setState({
        ...state,
        name: params?.name,
        id: params?.id,
        value: params?.value,
        finderCommission: params?.finder_commission,
        minimalPercent: params?.minimal_percent.toString(),
        creditCardFee: params?.credit_card_fee,
        suggestedPriceManufactures: params?.suggested_price_manufactures,
        minimalSaleValue: params?.minimal_sale_value,
      });
    }
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '<CiclONE/> | Orçamento realizado através do nosso APP',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.orcamento}>21/09/2021</Text>
        <Text style={styles.textButtom}>{state.id}</Text>
      </View>

      <Image source={Foto} style={styles.imagem} />
      <Text style={styles.cargo}>Vendedor</Text>
      <Text style={styles.nome}>Jubileu da Silva</Text>

      <View>
        <Text style={styles.nome2}>Nome:</Text>

        <TextInput
          style={styles.textInput}
          value={state.name}
          onChangeText={name => setState({...state, name})}
        />
      </View>

      <View style={styles.valores}>
        <Text style={styles.textValores}>Sugerido Fábrica:</Text>
        <TextInput
          style={styles.textInput2}
          value={state.suggestedPriceManufactures}
          onChangeText={suggestedPriceManufactures =>
            setState({...state, suggestedPriceManufactures})
          }
        />

        <Text style={styles.textValores}>Valor mínimo de venda:</Text>
        <TextInput
          style={styles.textInput2}
          value={state.minimalSaleValue}
          onChangeText={minimalSaleValue =>
            setState({...state, minimalSaleValue})
          }
        />
        <Text style={styles.textValores}>Valor de negociação:</Text>
        <TextInput
          style={styles.textInput2}
          value={state.value}
          onChangeText={value => setState({...state, value})}
        />
        <Text style={styles.textValores}>Resultado %:</Text>
        <TextInput
          style={styles.textInput2}
          value={state.minimalPercent}
          onChangeText={minimalPercent => setState({...state, minimalPercent})}
        />
      </View>

      <View style={styles.valores}>
        <Text style={styles.textValores}>Forma de pagamento</Text>
        <View>
          <TouchableOpacity
            style={styles.cartao}
            onPress={() => navigate('ParcelamentoPage')}>
            <Text>Parcelamento:</Text>
            <Text>Selecionar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textValores2}>Taxa de conveniência do cartão </Text>
        <TextInput
          style={styles.textInput3}
          value={state.creditcardFee}
          onChangeText={creditcardFee => setState({...state, creditcardFee})}
        />
        <Text style={styles.textValores2}>10x</Text>
        <TextInput style={styles.textInput3} />
        <Text style={styles.textValores2}>Finder</Text>
        <TextInput
          style={styles.textInput3}
          value={state.finderCommission}
          onChangeText={finderCommission =>
            setState({...state, finderCommission})
          }
        />
      </View>

      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.textValores3}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => onShare()}>
            <Text style={styles.textValores3}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  orcamento: {
    color: '#dee1dc',
    fontSize: 13,
    marginLeft: 270,
  },
  textButtom: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 18,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    marginLeft: 280,
    textAlign: 'center',
  },
  imagem: {
    width: 70,
    height: 70,
    marginRight: 280,
    marginTop: -70,
  },
  cargo: {
    color: '#dee1dc',
    fontSize: 15,
    marginRight: 120,
    marginTop: -40,
    margin: -10,
    alignItems: 'flex-start',
  },
  nome: {
    color: '#dee1dc',
    fontSize: 15,
    marginRight: 80,
    marginTop: -30,
    margin: -10,
    alignItems: 'flex-start',
  },
  nome2: {
    color: '#dee1dc',
    backgroundColor: '#282c2b',
    fontSize: 15,
    padding: 15,
    marginTop: 70,
    borderRadius: 10,
    width: 350,
  },
  textInput: {
    height: 35,
    borderWidth: 2,
    borderColor: '#121212',
    backgroundColor: '#dee1dc',
    color: '#121212',
    borderRadius: 10,
    marginLeft: 80,
    marginTop: -40,
    paddingHorizontal: 10,
    width: 260,
  },
  textInput2: {
    height: 35,
    borderWidth: 2,
    borderColor: '#121212',
    backgroundColor: '#dee1dc',
    color: '#121212',
    borderRadius: 10,
    marginLeft: 190,
    marginTop: -43,
    paddingHorizontal: 10,
    width: 150,
    margin: 5,
  },
  textInput3: {
    height: 25,
    borderWidth: 2,
    borderColor: '#121212',
    backgroundColor: '#dee1dc',
    color: '#121212',
    borderRadius: 10,
    marginLeft: 240,
    marginTop: -35,
    paddingHorizontal: 10,
    width: 100,
    margin: 10,
  },
  valores: {
    backgroundColor: '#282c2b',
    marginTop: 15,
    borderRadius: 10,
    width: 350,
  },
  textValores: {
    color: '#dee1dc',
    fontSize: 15,
    margin: 12,
    paddingBottom: 5,
  },
  cartao: {
    backgroundColor: '#dee1dc',
    fontSize: 18,
    borderRadius: 10,
    padding: 8,
    paddingLeft: 30,
    marginRight: 150,
    marginLeft: 10,
  },
  textValores2: {
    color: '#dee1dc',
    fontSize: 12,
    margin: 10,
  },
  button: {
    backgroundColor: '#282c2b',
    borderRadius: 100,
    opacity: 0.8,
    margin: 10,
    marginTop: 15,
    width: 90,
  },
  textValores3: {
    color: '#dee1dc',
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default QuotationPage;
