import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReadJsonFile from './readJsonFile';

const db = ReadJsonFile();

export const useStore = create(
  persist((set, get) => ({
    products: db.products,
    externals: db.externals,
    FavoritesList: [],
    CartList: [],
    CartPrice: 0
  }), {
    name: 'nilasoft-test-app',
    storage: createJSONStorage(() => AsyncStorage),
  }),
);
