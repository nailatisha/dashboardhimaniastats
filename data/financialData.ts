// Centralized financial data for HIMANIA Dashboard
// This data can be manually updated as needed

export interface Income {
  date: string;
  source: string;
  description: string;
  program: string;
  amount: number;
}

export interface Expense {
  date: string;
  category: string;
  description: string;
  program: string;
  amount: number;
}

export interface ProgramBudget {
  program: string;
  approved: number;
  used: number;
  remaining: number;
  usage: number;
}

export interface MonthlyCashFlow {
  month: string;
  totalIncome: number;
  totalExpense: number;
  endingBalance: number;
}

export interface FinancialData {
  totalIncome: number;
  totalExpenses: number;
  currentBalance: number;
  incomeBySource: { source: string; amount: number }[];
  expensesByCategory: { category: string; amount: number; percentage: number }[];
  recentIncome: Income[];
  recentExpenses: Expense[];
  programBudgets: ProgramBudget[];
  cashFlowTrends: MonthlyCashFlow[];
}

export const financialData: FinancialData = {
  totalIncome: 69500000,
  totalExpenses: 57900000,
  currentBalance: 11600000,

  incomeBySource: [
    { source: 'Sponsorship', amount: 25000000 },
    { source: 'Collaboration Cost', amount: 25000000 },
    { source: 'Creative Income', amount: 15000000 },
    { source: 'Investment', amount: 6000000 },
  ],

  expensesByCategory: [
    { category: 'Consumption', amount: 16212000, percentage: 28 },
    { category: 'Speaker Fee', amount: 11580000, percentage: 20 },
    { category: 'Equipment', amount: 9264000, percentage: 16 },
    { category: 'Logistics', amount: 8685000, percentage: 15 },
    { category: 'Venue', amount: 6948000, percentage: 12 },
    { category: 'Publication', amount: 5211000, percentage: 9 },
  ],

  recentIncome: [
    {
      date: '20 Mei 2024',
      source: 'Investment',
      description: 'Investment return',
      program: 'General',
      amount: 3000000,
    },
    {
      date: '15 Mei 2024',
      source: 'Sponsorship',
      description: 'Sponsorship for PRN Bazaar',
      program: 'PRN Bazaar',
      amount: 10000000,
    },
    {
      date: '10 Mei 2024',
      source: 'Creative Income',
      description: 'Creative income from HIHI project',
      program: 'HIHI',
      amount: 5000000,
    },
    {
      date: '1 Mei 2024',
      source: 'Collaboration Cost',
      description: 'Collaboration fee for PRN Festival',
      program: 'PRN Festival',
      amount: 12000000,
    },
    {
      date: '20 Apr 2024',
      source: 'Sponsorship',
      description: 'Sponsorship for Inside Insight',
      program: 'Inside Insight',
      amount: 8000000,
    },
    {
      date: '15 Apr 2024',
      source: 'Investment',
      description: 'Investment income from savings',
      program: 'General',
      amount: 3000000,
    },
  ],

  recentExpenses: [
    {
      date: '5 Jun 2024',
      category: 'Speaker Fee',
      description: 'Keynote speaker for BRAND event',
      program: 'BRAND',
      amount: 2800000,
    },
    {
      date: '1 Jun 2024',
      category: 'Consumption',
      description: 'Catering for BRAND launch event',
      program: 'BRAND',
      amount: 3200000,
    },
    {
      date: '28 Mei 2024',
      category: 'Logistics',
      description: 'Event setup and logistics for BRAND',
      program: 'BRAND',
      amount: 1800000,
    },
    {
      date: '25 Mei 2024',
      category: 'Equipment',
      description: 'Photography equipment for BRAND campaign',
      program: 'BRAND',
      amount: 2500000,
    },
    {
      date: '20 Mei 2024',
      category: 'Venue',
      description: 'Venue rental for BRAND event',
      program: 'BRAND',
      amount: 2200000,
    },
  ],

  programBudgets: [
    {
      program: 'PRN Festival',
      approved: 50000000,
      used: 25800000,
      remaining: 24200000,
      usage: 51.6,
    },
    {
      program: 'Level Up! x HIPPO',
      approved: 25000000,
      used: 2300000,
      remaining: 22700000,
      usage: 9.2,
    },
    {
      program: 'PRN Bazaar',
      approved: 20000000,
      used: 6500000,
      remaining: 13500000,
      usage: 32.5,
    },
    {
      program: 'BRAND',
      approved: 18000000,
      used: 10800000,
      remaining: 7200000,
      usage: 60.0,
    },
    {
      program: 'Inside Insight',
      approved: 15000000,
      used: 3500000,
      remaining: 11500000,
      usage: 23.3,
    },
    {
      program: 'HIHI',
      approved: 12000000,
      used: 3000000,
      remaining: 9000000,
      usage: 25.0,
    },
    {
      program: 'PERMADANI',
      approved: 8000000,
      used: 2000000,
      remaining: 6000000,
      usage: 25.0,
    },
  ],

  cashFlowTrends: [
    { month: 'Jan 2024', totalIncome: 7500000, totalExpense: 4000000, endingBalance: 5000000 },
    { month: 'Feb 2024', totalIncome: 8500000, totalExpense: 9000000, endingBalance: 5500000 },
    { month: 'Mar 2024', totalIncome: 17000000, totalExpense: 7000000, endingBalance: 15000000 },
    { month: 'Apr 2024', totalIncome: 16500000, totalExpense: 22000000, endingBalance: 9000000 },
    { month: 'May 2024', totalIncome: 22000000, totalExpense: 9000000, endingBalance: 22000000 },
  ],
};

// Helper function to format currency in Indonesian Rupiah
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

