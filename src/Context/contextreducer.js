// reducer =>takes old state and an action => returns new state 
const contextReducer =(state,action)=>{
    let transactions;
 switch(action.type){
   


    case'DELETE_TRANSACTION':
    // filter the state... it will keep all ids except the ones we are specifying in action.payload 
    // that will be deleted 
    transactions = state.filter((t) => t.id !== action.payload);

    localStorage.setItem('transactions', JSON.stringify(transactions));
   return transactions;

    case 'ADD_TRANSACTION':
     transactions=[action.payload, ...state]; // ... refers to spread operator 
     // ... makes sures above that new transactions pops up at the top and rest transactions 
     // are also stored at the same time 
     localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    default :
      return state;

 }

}
export default contextReducer;