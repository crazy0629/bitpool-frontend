<<<<<<< HEAD
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { challengeReducer } from './challenge';

export interface IState {
    auth: {
        currentUser: {
            _id: string,
            email: string,
            password: string,
            username: string,
            firstname: string,
            lastname: string,
            money: { busd: number, usdt: number, usd: number, bitp: number, quest: number },
            address: {
                ether: { privateKey: string, address: string },
                bitcoin: { privateKey: string, address: string },
                tron: { privateKey: string, address: string }
            },
            uid: number
        },
        type: string
    }
    challenge: {
        flag: boolean,
        model: object
    }
}

const reducer = combineReducers({
    auth: authReducer,
    challenge: challengeReducer
});

const store = configureStore({
    reducer,
    middleware: () => getDefaultMiddleware(),
})

export default store;
=======
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { challengeReducer } from "./challenge";

export interface IState {
  auth: {
    currentUser: {
      id: string;
      email: string;
      password: string;
      username: string;
      firstname: string;
      lastname: string;
      money: {
        busd: number;
        usdt: number;
        usd: number;
        bitp: number;
        quest: number;
        cake: number;
      };
      address: {
        ether: { privateKey: string; address: string };
        bitcoin: { privateKey: string; address: string };
        tron: { privateKey: string; address: string };
      };
    };
    type: string;
  };
  challenge: {
    flag: boolean;
    model: object;
  };
}

const reducer = combineReducers({
  auth: authReducer,
  challenge: challengeReducer,
});

const store = configureStore({
  reducer,
  middleware: () => getDefaultMiddleware(),
});

export default store;
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
