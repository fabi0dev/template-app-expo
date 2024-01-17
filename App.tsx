import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme as DefaultTheme } from "@themes/light";
import Navigator from "./src/navigator";
import { StatusBar } from 'expo-status-bar';
/* import { useFonts } from "expo-font"; */

export default function App() {
/*   const [loaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
  });
 */

  return (
    <ThemeProvider theme={DefaultTheme}>
        <Navigator defaultNavigator={'Home'} />
    </ThemeProvider>
  );
}
