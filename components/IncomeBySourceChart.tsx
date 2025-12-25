'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/data/financialData';

interface IncomeBySourceChartProps {
  data: { source: string; amount: number }[];
}

export default function IncomeBySourceChart({ data }: IncomeBySourceChartProps) {
  const chartData = data.map((item) => ({
    source: item.source,
    amount: item.amount / 1000000, // Convert to millions
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold">{payload[0].payload.source}</p>
          <p className="text-green-600">
            {formatCurrency(payload[0].value * 1000000)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Income by Source
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            tickFormatter={(value) => `${value}M`}
            domain={[0, 'dataMax']}
          />
          <YAxis
            type="category"
            dataKey="source"
            width={120}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="amount"
            name="Income (IDR)"
            fill="#10b981"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

