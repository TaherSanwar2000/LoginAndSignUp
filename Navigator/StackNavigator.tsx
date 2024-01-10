import {createStackNavigator} from '@react-navigation/stack';
import Login from '../scr/Login';
import SignUp from '../scr/SignUp';
import UserDetail from '../scr/UserDetail';
import Home from '../scr/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Registration" component={UserDetail} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
}

export default MyStack;
