import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Header from "./components/Header";


const Stack = createNativeStackNavigator();

type RouteHeaderProps = {
    route: any;
    navigation: any;
};

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ route }: RouteHeaderProps) => ({
                        headerRight: () => <Header />,
                        headerTitleAlign: 'center',
                        headerBackVisible: true,
                    })}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={({ route }: RouteHeaderProps) => ({
                        headerRight: () => <Header />,
                        headerTitleAlign: 'center',
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
