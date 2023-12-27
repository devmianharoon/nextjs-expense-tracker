import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ExpenseType } from '@/types/commonTypes';

export default function Chart(props: any) {
  const data = props.expense.map((expense: ExpenseType) => ({
    name: expense.date,
    amount: expense.amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" shape={<Rectangle fill="green" stroke="blue" width={100}  />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
