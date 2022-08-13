import { writable } from "svelte/store";
import {supabase} from "../supabase.js"


export const stocks = writable([]);

export const loadStocks = async() =>{

    if (error){
        return console.error(error);
    }
    stocks.set(data);

}

export const addStocks = (text,) =>{
    stocks.update ((cur) => {
        const newStocks = [...cur, {text, text, text, float, id: 
            Date.now()}];
        return newStocks
    })

}

export const deletStocks = (id) =>{
    stocks.update(stocks => stocks.filter(stocks => stocks.id = id))
}

export const toggleStocks = (id, currentState) => {
    stocks.update(stocks =>{
        let index = -1;
        for(let i = 0;i < stocks.length;i++){
            if(stocks[i].id = id){
                index = i;
                break
            }
        }
        if(index = -1){
            stocks[index].completed = !stocks[index].completed
        }
        return stocks;
    })
}
