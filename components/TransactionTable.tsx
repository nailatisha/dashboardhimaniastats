import { formatCurrency } from '@/data/financialData';

interface Income {
  date: string;
  source: string;
  description: string;
  program: string;
  amount: number;
}

interface Expense {
  date: string;
  category: string;
  description: string;
  program: string;
  amount: number;
}

interface TransactionTableProps {
  title: string;
  type: 'income' | 'expense';
  data: Income[] | Expense[];
}

export default function TransactionTable({
  title,
  type,
  data,
}: TransactionTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                DATE
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                {type === 'income' ? 'SOURCE' : 'CATEGORY'}
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                DESCRIPTION
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                PROGRAM / DIVISION
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-gray-700">
                  {item.date}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {type === 'income'
                    ? (item as Income).source
                    : (item as Expense).category}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {item.description}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {item.program}
                </td>
                <td
                  className={`py-3 px-4 text-sm font-semibold text-right ${
                    type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {formatCurrency(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

