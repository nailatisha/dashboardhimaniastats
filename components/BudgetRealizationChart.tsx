'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '@/data/financialData';

interface ProgramBudget {
  program: string;
  approved: number;
  used: number;
  remaining: number;
  usage: number;
}

interface BudgetRealizationChartProps {
  data: ProgramBudget[];
}

export default function BudgetRealizationChart({
  data,
}: BudgetRealizationChartProps) {
  const chartData = data.map((item) => ({
    program: item.program,
    approved: item.approved / 1000000, // Convert to millions
    used: item.used / 1000000,
    remaining: item.remaining / 1000000,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="font-semibold mb-2">{payload[0].payload.program}</p>
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
        Budget Realization by Program
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="program"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 11 }}
          />
          <YAxis tickFormatter={(value) => `${value}M`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="approved"
            name="Approved Budget"
            fill="#9ca3af"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="used"
            name="Used Budget"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="remaining"
            name="Remaining Budget"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

