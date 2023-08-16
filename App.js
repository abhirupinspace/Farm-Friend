const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FarmMart from "./screens/FarmMart";
import FarmhelpIcon from "./screens/FarmhelpIcon";
import LinksIcon from "./screens/LinksIcon";
import ChatSectionIcon from "./screens/ChatSectionIcon";
import IconSearchOutline from "./components/IconSearchOutline";
import ChatSection from "./screens/ChatSection";
import AgriConnect from "./screens/AgriConnect";
import MarketTrendsTomatoes from "./screens/MarketTrendsTomatoes";
import MarketTrendsTomatoes1 from "./screens/MarketTrendsTomatoes1";
import RESWHEATIcon from "./screens/RESWHEATIcon";
import RESRICEIcon from "./screens/RESRICEIcon";
import LoginPageLanguage from "./screens/LoginPageLanguage";
import LoginPageLanguage1 from "./screens/LoginPageLanguage1";
import MarketTrends from "./screens/MarketTrends";
import ToDoIcon from "./screens/ToDoIcon";
import ProfileEdit from "./screens/ProfileEdit";
import Profile1 from "./screens/Profile1";
import SettingsIcon from "./screens/SettingsIcon";
import WeatherUpdatesIcon from "./screens/WeatherUpdatesIcon";
import LoginPageIcon from "./screens/LoginPageIcon";
import Homepage from "./screens/Homepage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FarmMart"
              component={FarmMart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Farmhelp"
              component={FarmhelpIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Links"
              component={LinksIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatSection"
              component={ChatSectionIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatSection1"
              component={ChatSection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgriConnect"
              component={AgriConnect}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MarketTrendsTomatoes"
              component={MarketTrendsTomatoes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MarketTrendsTomatoes1"
              component={MarketTrendsTomatoes1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RESWHEAT"
              component={RESWHEATIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RESRICE"
              component={RESRICEIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPageLanguage"
              component={LoginPageLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPageLanguage1"
              component={LoginPageLanguage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MarketTrends"
              component={MarketTrends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToDo"
              component={ToDoIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WeatherUpdates"
              component={WeatherUpdatesIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPageIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
