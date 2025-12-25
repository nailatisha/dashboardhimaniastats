import { formatCurrency } from '@/data/financialData';

interface ProgramBudget {
  program: string;
  approved: number;
  used: number;
  remaining: number;
  usage: number;
}

interface BudgetTableProps {
  data: ProgramBudget[];
}

export default function BudgetTable({ data }: BudgetTableProps) {
  const getUsageColor = (usage: number) => {
    if (usage > 50) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Budget Details
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Program
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Approved
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Used
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Remaining
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-sm font-medium text-gray-800">
                  {item.program}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 text-right">
                  {formatCurrency(item.approved)}
                </td>
                <td className="py-3 px-4 text-sm text-red-600 font-semibold text-right">
                  {formatCurrency(item.used)}
                </td>
                <td className="py-3 px-4 text-sm text-green-600 font-semibold text-right">
                  {formatCurrency(item.remaining)}
                </td>
                <td className="py-3 px-4 text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getUsageColor(
                      item.usage
                    )}`}
                  >
                    {item.usage.toFixed(1)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

