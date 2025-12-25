'use client';

import { financialData } from '@/data/financialData';
import KPICard from '@/components/KPICard';
import IncomeBySourceChart from '@/components/IncomeBySourceChart';
import ExpensesByCategoryChart from '@/components/ExpensesByCategoryChart';
import TransactionTable from '@/components/TransactionTable';
import CashFlowTrendsChart from '@/components/CashFlowTrendsChart';
import { Wallet, TrendingUp, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                HIMANIA FIA UI's Financial Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Open, transparent, and real-time financial information
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/budget"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Budget Realization
              </Link>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="Total Income"
            value={financialData.totalIncome}
            icon={Wallet}
            borderColor="border-green-500"
            iconColor="text-green-500"
          />
          <KPICard
            title="Total Expenses"
            value={financialData.totalExpenses}
            icon={TrendingUp}
            borderColor="border-red-500"
            iconColor="text-red-500"
          />
          <KPICard
            title="Current Balance"
            value={financialData.currentBalance}
            subtitle="Positive balance"
            icon={CreditCard}
            borderColor="border-blue-500"
            iconColor="text-blue-500"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <IncomeBySourceChart data={financialData.incomeBySource} />
          <ExpensesByCategoryChart data={financialData.expensesByCategory} />
        </div>

        {/* Cash Flow Trends */}
        <div className="mb-8">
          <CashFlowTrendsChart data={financialData.cashFlowTrends} />
        </div>

        {/* Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionTable
            title="Recent Income"
            type="income"
            data={financialData.recentIncome}
          />
          <TransactionTable
            title="Recent Expenses"
            type="expense"
            data={financialData.recentExpenses}
          />
        </div>
      </main>
    </div>
  );
}

