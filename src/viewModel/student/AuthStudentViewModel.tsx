import {API} from '../../constant/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStudentViewModel = () => {
  type authLoginProps = {
    username: string;
    password: string;
    onError: (status: boolean, message?: string) => void;
  };

  const saveTokenLocalStorage = async (token: string) => {
    return await AsyncStorage.setItem('token', token);
  };

  const getTokenLocalStorage = async () => {
    return await AsyncStorage.getItem('token');
  };

  const removeTokenLocalStorage = async () => {
    return await AsyncStorage.removeItem('token');
  };

  const authLoginRequest = async ({
    username,
    password,
    onError,
  }: authLoginProps) => {
    const {authLogin} = API().studentService();

    try {
      const authToken = await authLogin({username, password});
      await saveTokenLocalStorage(authToken);
      onError(false);
      console.log(authToken);
    } catch (error: any) {
      onError(true, error.message);
    }
  };

  const authLogout = async () => {
    await removeTokenLocalStorage();
  };

  return {
    authLoginRequest,
    authLogout,
  };
};
