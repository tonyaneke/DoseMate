import AsyncStorage from "@react-native-async-storage/async-storage";

const saveToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("AsyncStorage Error:", error);
  }
};

const getFromAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("AsyncStorage Error:", error);
    return null;
  }
};

export { saveToAsyncStorage, getFromAsyncStorage };
