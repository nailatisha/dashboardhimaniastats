import { formatCurrency } from '@/data/financialData';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon: LucideIcon;
  borderColor: string;
  iconColor: string;
}

export default function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  borderColor,
  iconColor,
}: KPICardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${borderColor} hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mb-1">
            {formatCurrency(value)}
          </p>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`${iconColor} p-3 rounded-full bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}

