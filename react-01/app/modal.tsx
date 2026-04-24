import { StyleSheet } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function ModalScreen() {
  return (
    <View>
      <Image>

      </Image>
      <Text>Olá, mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
