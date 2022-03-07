import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd';
import axios from 'axios';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from 'utils/contants';
import setAuthToken from 'utils/setAuthToken';

export const loadUser = async () => {
  if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
    setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
  }

  try {
    const res = await axios.get(`${apiUrl}/auth`);
    if (res.data.success) {
      authReducer.actions.setAuth({ isAuthenticated: true, user: res.data.user })
    }
  } catch (error) {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    setAuthToken(null);
    authReducer.actions.setAuth({ isAuthenticated: false, user: null })
  }
}

export const authReducer = createSlice({
  name: 'counter',
  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null
  },
  reducers: {
    userLoginSuccess: (state, action) => {
      const { values } = action.payload;
      
    },
    setAuth: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        authLoading: false,
        user,
        isAuthenticated,
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLoginRequest, decrement, incrementByAmount } = authReducer.actions

export default authReducer.reducer