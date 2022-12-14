import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './route';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
