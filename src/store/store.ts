import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReadJsonFile from './readJsonFile';

const db = ReadJsonFile();
export const useStore = create(
  persist(
    (set, get) => ({
      products: db.products,
      externals: db.externals,
      FavoritesList: [],
      CartList: [],
      CartPrice: 0,
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            let found = false;
            // for (let i = 0; i < state.CartList.length; i++) {
            //   if (state.CartList[i].id == cartItem.id) {
            //     found = true;
            //     let size = false;
            //     for (let j = 0; j < state.CartList[i].prices.length; j++) {
            //       if (
            //         state.CartList[i].prices[j].size == cartItem.prices[0].size
            //       ) {
            //         size = true;
            //         if(state.CartList[i].prices[j].color == cartItem.prices[0].color){
            //           state.CartList[i].prices[j].quantity++;
            //         } else {
            //           state.CartList[i].prices.push(cartItem.prices[0]);
            //         }
            //         break;
            //       }
            //     }
            //     if (!size) {
            //       state.CartList[i].prices.push(cartItem.prices[0]);
            //     }
            //     state.CartList[i].prices.sort((a: any, b: any) => {
            //       if (a.size > b.size) return -1;
            //       if (a.size < b.size) return 1;
            //       return 0;
            //     });
            //     break;
            //   }
            // }
            if (!found) {
              state.CartList.push(cartItem);
            }
          }),
        ),
      deleteFromCartList: (index: number) =>
        set(
          produce(state => {
            state.CartList.splice(index, 1);
          }),
        ),
      emptyCartList: () =>
        set(
          produce(state => {
            state.CartList = [];
          }),
        ),
      calculateCartPrice: () =>
        set(
          produce(state => {
            let totalprice = 0;
            for (let i = 0; i < state.CartList.length; i++) {
              let tempprice = 0;
              for (let j = 0; j < state.CartList[i].prices.length; j++) {
                tempprice =
                  tempprice +
                  parseFloat(state.CartList[i].prices[j].price) *
                    state.CartList[i].prices[j].quantity;
              }
              state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
              totalprice = totalprice + tempprice;
            }
            state.CartPrice = totalprice.toFixed(2).toString();
          }),
        ),
      addToFavoriteList: (id: string) =>
        set(
          produce(state => {
            for (let i = 0; i < state.products.length; i++) {
              if (state.products[i].id == id) {
                state.FavoritesList.unshift(state.products[i]);
                break;
              }
            }
          }),
        ),
      deleteFromFavoriteList: (id: any) =>
        set(
          produce(state => {
            let spliceIndex = -1;
            for (let i = 0; i < state.FavoritesList.length; i++) {
              if (state.FavoritesList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FavoritesList.splice(spliceIndex, 1);
          }),
        ),
    }),
    {
      name: 'nilasoft-test-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
