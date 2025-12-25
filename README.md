# HIMANIA Financial Dashboard

A simple, transparent, and user-friendly financial dashboard for HIMANIA FIA UI's internal financial information display.

## Features

- **Open & Accessible**: Viewable by all board members
- **Manual Data Management**: No external APIs or integrations required
- **Visual Financial Overview**: 
  - Key Performance Indicators (KPIs)
  - Income by Source (Bar Chart)
  - Expenses by Category (Pie Chart)
  - Budget Realization by Program (Bar Chart)
  - Cash Flow Trends (Line Chart)
  - Recent Income & Expenses Tables

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Chart visualization
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Data Management

All financial data is stored in `data/financialData.ts`. This file contains:

- Total income, expenses, and balance
- Income by source breakdown
- Expenses by category breakdown
- Recent income and expense transactions
- Program budgets (approved, used, remaining)
- Monthly cash flow trends

### Updating Data

To update financial data:

1. Open `data/financialData.ts`
2. Modify the `financialData` object with new values
3. Save the file - changes will reflect immediately in the dashboard

### Data Structure

```typescript
{
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
```

## Pages

- **Home (`/`)**: Main dashboard with KPIs, charts, and recent transactions
- **Budget (`/budget`)**: Budget realization by program with detailed table

## Design Principles

- **Clean & Minimal**: Professional interface without clutter
- **Color Coding**: 
  - Green for income
  - Red for expenses
  - Blue for balance
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Accessible**: Clear information hierarchy and readable typography

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard
│   ├── budget/
│   │   └── page.tsx        # Budget realization page
│   └── globals.css         # Global styles
├── components/
│   ├── KPICard.tsx         # KPI metric cards
│   ├── IncomeBySourceChart.tsx
│   ├── ExpensesByCategoryChart.tsx
│   ├── CashFlowTrendsChart.tsx
│   ├── BudgetRealizationChart.tsx
│   ├── BudgetTable.tsx
│   └── TransactionTable.tsx
├── data/
│   └── financialData.ts    # Centralized financial data
└── package.json
```

## License

Internal use for HIMANIA FIA UI organization.

