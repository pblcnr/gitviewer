import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";
// import User from "./pages/user";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "LOGIN",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerLeft: null,
          title: "GitHub VIEWER",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />
      {/* <Stack.Screen name="User" component={User} options={{
          title: "Perfil do Usuário",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          },
        }}/>   */}
    </Stack.Navigator>
  );
}