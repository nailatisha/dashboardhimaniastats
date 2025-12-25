'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '@/data/financialData';

interface MonthlyCashFlow {
  month: string;
  totalIncome: number;
  totalExpense: number;
  endingBalance: number;
}

interface CashFlowTrendsChartProps {
  data: MonthlyCashFlow[];
}

export default function CashFlowTrendsChart({
  data,
}: CashFlowTrendsChartProps) {
  const chartData = data.map((item) => ({
    month: item.month,
    totalIncome: item.totalIncome / 1000000, // Convert to millions
    totalExpense: item.totalExpense / 1000000,
    endingBalance: item.endingBalance / 1000000,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold mb-2">{payload[0].payload.month}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: {formatCurrency(entry.value * 1000000)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Cash Flow Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `${value}M`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalIncome"
            name="Total Income"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="totalExpense"
            name="Total Expense"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="endingBalance"
            name="Ending Balance"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

