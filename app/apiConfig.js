import axios from 'react-native-axios/lib/axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../screens/NavigationService';
import { handleApiError } from '../utils/errorHandler';

const axiosInstance = axios.create({
  baseURL: 'https://api.puyar-projects.ir/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Function to get a token from AsyncStorage
// const getToken = async () => {
//   return await AsyncStorage.getItem('auth');
// }

// // Function to set a token in AsyncStorage
// const setToken = async (token) => {
//   await AsyncStorage.setItem('auth', token);
// }

// // Function to delete a token from AsyncStorage
// export const deleteToken = async () => {
//   await AsyncStorage.removeItem('auth');
// }

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const auth = await getToken();
//     if (auth) {
//       config.headers.Authorization = `Bearer ${auth}`;
//     } else {
//       delete config.headers.Authorization;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (
//       error.response &&
//       error.response.status === 400 &&
//       (error.response.data.detail === 'درخواست ناقص.' ||
//         error.response.data.detail === 'Malformed request.')
//     ) {
//       await deleteToken();
//       // Redirect to login page (in React Native, use navigation)
//     }
//     else if (error.response.status === 403) {
//       navigate('NoAccess');
//     }
//     else if (error.response.status === 400) {
//       // handleApiError(error, navigation);
//       console.log("error.response.status === 400")
//     }
//     if (error.response.status === 401) {
//       await deleteToken();
//       navigate('Login'); // استفاده از ناوبری
//       console.log('.............................................. 401')
//       // Redirect to login page (in React Native, use navigation)
//     }

//     console.log("Error  ==> ", error.response);
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
