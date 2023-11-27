import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FirstOnboardingScreen from "../screens/Onboarding/FirstOnboardingScreen";
import Routes from "./Routes";
import SecondOnboardingScreen from "../screens/Onboarding/SecondOnboardingScreen";
import ThirdOnboardingScreen from "../screens/Onboarding/ThirdOnboardingScreen";
import GetStarted from "../screens/Registration/GetStarted";
import Register from "../screens/Registration/Register";
import Verification from "../screens/Registration/Verification";
import Success from "../screens/Registration/Success";
import PatientProfileSetup from "../screens/Registration/PatientProfileSetup";
import Login from "../screens/Login/Login";
import LoginVerification from "../screens/Login/LoginVerification";
import ConfirmPassword from "../screens/Login/ConfirmPassword";
import PasswordResetSuccess from "../screens/Login/PasswordResetSuccess";
import Home from "../screens/MainScreen/Home";
import AddMedication from "../screens/MainScreen/AddMedication";
import Medication from "../screens/MainScreen/Medication";
import Insights from "../screens/MainScreen/Insights";
import { Background, Colors, Status } from "../constants/styles";
import { View, Text, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Profile from "../screens/MainScreen/Profile";
import AddMedOne from "../screens/AddMedicationScreens/AddMedOne";
import AddMedTwo from "../screens/AddMedicationScreens/AddMedTwo";
import AddMedThree from "../screens/AddMedicationScreens/AddMedThree";
import AddMedFour from "../screens/AddMedicationScreens/AddMedFour";
import DocHome from "../screens/DoctorScreens/DocHome";
import Patients from "../screens/DoctorScreens/Patients";
import DocInsights from "../screens/DoctorScreens/DocInsights";
import DocProfile from "../screens/DoctorScreens/DocProfile";
import DocAddMedication from "../screens/DoctorScreens/DocAddMedication";
import PatientProfile from "../screens/DoctorScreens/PatientProfile";
import SetUpTwo from "../screens/Registration/SetUpTwo";
import { getFromAsyncStorage } from "../services/asyncStorage";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const DocTab = createBottomTabNavigator();

let initialRoute;

const getUser = async () => {
  const user = await getFromAsyncStorage("userData");

  user ? (initialRoute = "Main") : (initialRoute = Routes.OnboardingOne);
  console.log("user:", user);
};
getUser();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 100,
    backgroundColor: Background.GREEN,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.Home} screenOptions={screenOptions}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="ios-home"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, marginTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Medication}
        component={Medication}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="prescription-bottle-alt"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, marginTop: 4, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Medication
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.AddMedication}
        component={AddMedication}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  top: Platform.OS == "ios" ? -30 : -30,
                  width: Platform.OS == "ios" ? 70 : 90,
                  height: Platform.OS == "ios" ? 70 : 90,
                  borderRadius: Platform.OS == "ios" ? 35 : 90,
                  backgroundColor: Colors.PRIMARY_COLOR,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 16,

                  // To make sure the shadow is visible, you may need to adjust the elevation:
                  elevation: 8,
                }}
              >
                <Entypo name="plus" size={50} color={"white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Insights}
        component={Insights}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="insights"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, paddingTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Insights
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="person"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, paddingTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const DocTabs = () => {
  return (
    <DocTab.Navigator
      initialRouteName={Routes.docScreen.Home}
      screenOptions={screenOptions}
    >
      <DocTab.Screen
        name={Routes.docScreen.Home}
        component={DocHome}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="ios-home"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, marginTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <DocTab.Screen
        name={Routes.docScreen.Patient}
        component={Patients}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="people"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, marginTop: 4, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Patients
                </Text>
              </View>
            );
          },
        }}
      />
      <DocTab.Screen
        name={Routes.docScreen.AddMedication}
        component={DocAddMedication}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  top: Platform.OS == "ios" ? -30 : -30,
                  width: Platform.OS == "ios" ? 70 : 90,
                  height: Platform.OS == "ios" ? 70 : 90,
                  borderRadius: Platform.OS == "ios" ? 35 : 90,
                  backgroundColor: Status.DISABLED,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 16,

                  // To make sure the shadow is visible, you may need to adjust the elevation:
                  elevation: 8,
                }}
              >
                <Entypo name="plus" size={50} color={"white"} />
              </View>
            );
          },
        }}
      />
      <DocTab.Screen
        name={Routes.docScreen.Insight}
        component={DocInsights}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="insights"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, paddingTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Insights
                </Text>
              </View>
            );
          },
        }}
      />
      <DocTab.Screen
        name={Routes.docScreen.Profile}
        component={DocProfile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="person"
                  size={24}
                  color={
                    focused ? Colors.PRIMARY_COLOR : Colors.SECONDARY_COLOR
                  }
                />

                <Text
                  style={[
                    { fontSize: 12, paddingTop: 5, fontWeight: "700" },
                    focused
                      ? { color: Colors.PRIMARY_COLOR }
                      : { color: Colors.SECONDARY_COLOR },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </DocTab.Navigator>
  );
};

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen
        name={Routes.OnboardingOne}
        component={FirstOnboardingScreen}
      />
      <Stack.Screen
        name={Routes.OnboardingTwo}
        component={SecondOnboardingScreen}
      />
      <Stack.Screen
        name={Routes.OnboardingThree}
        component={ThirdOnboardingScreen}
      />
      <Stack.Screen name={Routes.GetStarted} component={GetStarted} />
      <Stack.Screen name={Routes.Register} component={Register} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Verification} component={Verification} />
      <Stack.Screen name={Routes.Success} component={Success} />
      <Stack.Screen
        name={Routes.PatientSetup}
        component={PatientProfileSetup}
      />
      <Stack.Screen
        name={Routes.LoginVerification}
        component={LoginVerification}
      />
      <Stack.Screen name={Routes.ConfirmPassword} component={ConfirmPassword} />
      <Stack.Screen name={Routes.SetupTwo} component={SetUpTwo} />
      <Stack.Screen
        name={Routes.PasswordResetConfirmed}
        component={PasswordResetSuccess}
      />
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="MainDoc" component={DocTabs} />
      <Stack.Screen name={Routes.addMed.FirstScreen} component={AddMedOne} />
      <Stack.Screen name={Routes.addMed.SecondScreen} component={AddMedTwo} />
      <Stack.Screen name={Routes.addMed.ThirdScreen} component={AddMedThree} />
      <Stack.Screen name={Routes.addMed.FourthScreen} component={AddMedFour} />
      <Stack.Screen
        name={Routes.docScreen.PatientProfile}
        component={PatientProfile}
      />
    </Stack.Navigator>
  );
}
