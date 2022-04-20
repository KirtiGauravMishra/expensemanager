
import React, { useReducer, createContext } from 'react';

import contextReducer from './contextreducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":56,"category":"Investments","type":"Income","date":"2022-04-20","id":"a34caa8b-d6fa-4ac0-bc82-877970f161db"},{"amount":345,"category":"Travel","type":"Expense","date":"2022-04-20","id":"2218a45c-8964-4535-a020-33406aaec09f"},{"amount":454,"category":"Extra income","type":"Income","date":"2022-04-20","id":"674d71bf-6c7d-42dc-8d98-1418f3f015f7"}];

export const ExpenseTrackerContext = createContext(initialState);


export const Provider =({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer,initialState);

//creating our actions for deleting and adding transaction using dispatch and use reducer

    const deleteTransaction =(id)=> 
    {dispatch({type:'DELETE_TRANSACTION',payload: id}); };

    const addTransaction=(transaction)=> 
   { dispatch({type:'ADD_TRANSACTION', payload: transaction }); };
    
    const Balance = transactions.reduce((acc, currVal) => {
    return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
      }, 0);
    return (
        < ExpenseTrackerContext.Provider value ={{
            deleteTransaction,
            addTransaction,
            Balance,
            transactions
           
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );

};
