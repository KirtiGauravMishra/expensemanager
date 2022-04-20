import React,{useState,useContext,useEffect} from 'react';
import { TextField, Typography, Grid, Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';

import useStyles from './Styles';
import { ExpenseTrackerContext } from '../../../../Context/Context';
import {v4 as uuidv4} from 'uuid';
import { incomeCategories, expenseCategories } from '../../../../Constants/Categories';
import formatDate from '../../../../utils/formatDate';
import { useSpeechContext } from '@speechly/react-client';
import CustomizedSnackbar from '../../snackbar/snackbar';


const initialstate={
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),

};

const Form = () => {
const classes=useStyles();
//using state from above 
const [formData,setFormData]=useState(initialstate);
const{addTransaction}= useContext(ExpenseTrackerContext);
const{segment}=useSpeechContext();
const [open, setOpen] = React.useState(false);


const createTransaction=()=>{

  

    /* using uuid to get unique id everytime */
      
   
    const transaction=({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setOpen(true);
     addTransaction(transaction);
     setFormData(initialstate);

    };




useEffect(() => {
  if (segment) {
    if (segment.intent.intent === 'add_expense') {
      setFormData({ ...formData, type: 'Expense' });
    } else if (segment.intent.intent === 'add_income') {
      setFormData({ ...formData, type: 'Income' });
    } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
      return createTransaction();
    } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
      return setFormData(initialstate);
    }
    segment.entities.forEach((s) => {
      const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

      switch (s.type) {
        
        case 'amount':
          setFormData({ ...formData, amount: s.value });
          break;

        case 'category':
          if (incomeCategories.map((iC) => iC.type).includes(category)) {
            setFormData({ ...formData, type: 'Income', category });
          } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
            setFormData({ ...formData, type: 'Expense', category });
          }
          break;

        case 'date':
          setFormData({ ...formData, date: s.value });
          break;

        default:
          break;
      }
    });

    if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
      createTransaction();
    }
  }
}, [segment]);



const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <CustomizedSnackbar open={open} setOpen={setOpen}/>
        <Grid item xs={12}> 
        <Typography align="center" variant="subtitle2" gutterBottom>
        {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
         
        </Typography>
        </Grid>

     
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
           {/* samajh bete->form data kaa tuype le rhe hai uper se using usestate... fir form 
                type select kiya aur uska data dal dya as easy as that*/} 
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>




   <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>

        {/* Samjho -> Form main se category uthaya ... checked for categoris available
         checks all elements using spread operator and select ourt target category from same  */}
   
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
          {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>




        <Grid item xs={6}>
            {/* Spread operator will check for all the data ... will spread the data */}
            <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />

        </Grid>


        <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value )})} />
            
        </Grid>


        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  );
};

export default Form;