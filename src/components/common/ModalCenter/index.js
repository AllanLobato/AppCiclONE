import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';

const ModalCenter = ({
  visible,
  actionClose,
  handleAction,
  actionCalc,
  actionNext,
  state,
}) => {
  const {values, action} = state;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableOpacity style={styles.container} onPress={actionClose}>
        <View style={styles.content}>
          <View style={styles.contentText}>
            <Text style={styles.textInfo}>Valor sugerido de fábrica:</Text>

            <TextInput
              style={styles.textInput}
              value={values.suggestedPriceManufactures}
              onChangeText={suggestedPriceManufactures =>
                action({...values, suggestedPriceManufactures})
              }
            />

            <Text style={styles.textInfo}>Valor mínimo de venda:</Text>

            <TextInput
              style={styles.textInput}
              value={values.minimalSaleValue}
              onChangeText={minimalSaleValue =>
                action({...values, minimalSaleValue})
              }
            />
            <View style={styles.row}>
              <TouchableOpacity style={styles.textSeguir} onPress={actionCalc}>
                <Text>Calcular</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textSeguir} onPress={actionNext}>
                <Text>Seguir</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textClose} onPress={actionClose}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
    opacity: 0.85,
  },
  content: {
    backgroundColor: '#282c2b',
    width: '80%',
    borderRadius: 20,
  },
  contentText: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  textInfo: {
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 0.5,
    color: '#f5f5f5',
  },
  contentButtons: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    borderRadius: 10,
    margin: 15,
    color: '#f5f5f5',
    paddingHorizontal: 90,
  },
  textSeguir: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: '#121212',
    fontSize: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 20,
  },
  textClose: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    color: '#121212',
    fontSize: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
export {ModalCenter};
