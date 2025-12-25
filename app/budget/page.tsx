'use client';

import { financialData } from '@/data/financialData';
import BudgetRealizationChart from '@/components/BudgetRealizationChart';
import BudgetTable from '@/components/BudgetTable';
import Link from 'next/link';

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Budget Realization by Program
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Track budget allocation and usage across all programs
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BudgetRealizationChart data={financialData.programBudgets} />
        <BudgetTable data={financialData.programBudgets} />
      </main>
    </div>
  );
}

