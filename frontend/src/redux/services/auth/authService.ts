import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { DecodedJwt } from '../../models/DecodedJwt.interface';
import { DisplayUser } from '../../models/DisplayUser.interface';
import { Jwt } from '../../models/Jwt';
import { LoginUser } from '../../models/LoginUser.interface';
import { NewUser } from '../../models/NewUser';


const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `https://cardano-athletic.onrender.com/cardano-athletics/user/signup`,
    newUser
  );

  return response.data;
};

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  try {
    const response = await axios.post(
      `https://cardano-athletic.onrender.com/cardano-athletics/user/signin`,
      user
    );

    if (response.data && response.data.token) {
      const { token, user: userData } = response.data;
      localStorage.setItem('jwt', token);
      localStorage.setItem('user', JSON.stringify(userData));
      const decodedJwt: any = jwtDecode(response.data.token);


      return { jwt: token, user: userData };
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
const logout = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  try {
    const response = await axios.post(
      `https://cardano-athletic.onrender.com/cardano-athletics/user/verify-jwt`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (response.data) {
      const jwtExpirationMs = response.data.exp * 1000;
      return jwtExpirationMs > Date.now();
    }

    return false;
  } catch (error) {
    console.error("Error during JWT verification:", error);
    return false;
  }
}

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
