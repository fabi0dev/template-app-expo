import {  Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={{ marginTop: 20}}>
      <Text style={{fontWeight: 'bold'}}>This is home of template app</Text>

      <Text>--add styled-components</Text>
      <Text>--add styled-system</Text>
      <Text>--add navigator</Text>
      <Text>--add expo-fonts</Text>
      <Text>--add expo-dotenv</Text>
    </View>
  );
}
