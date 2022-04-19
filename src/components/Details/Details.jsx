import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import usestyles from './style';
import useTransactions from '../../useTransactions';
import DonutChart from 'react-donut-chart';

import {PieChart, Pie} from 'recharts';


const DetailsCard = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = usestyles();

  return (
    <Card className={title === 'Income' ? classes.Income : classes.Expense}>
      <CardHeader title={title} />
      <CardContent>
        
        <Typography variant="h5">₹{total}</Typography>
        <Doughnut data={chartData} />
         
        
      
        
      </CardContent>
      
    </Card>
    
  );
};


export default DetailsCard;