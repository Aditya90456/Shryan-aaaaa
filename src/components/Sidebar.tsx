import React from 'react';
import { 
  Home, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  PieChart, 
  Settings, 
  LogOut,
  CreditCard,
  History
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const menuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Wallet, label: 'Wallet', id: 'wallet' },
  { icon: CreditCard, label: 'Payments', id: 'payments' },
  { icon: History, label: 'Transactions', id: 'transactions' },
  { icon: PieChart, label: 'Analytics', id: 'analytics' },
];

export default function Sidebar() {
  const [active, setActive] = React.useState('dashboard');

  return (
    <div className="w-20 md:w-64 h-screen border-r border-white/10 flex flex-col items-center md:items-stretch p-4 gap-8">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
          <Wallet className="text-white" size={24} />
        </div>
        <span className="hidden md:block font-display text-xl font-bold tracking-tight">ZENITH</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative",
              active === item.id 
                ? "bg-white/10 text-brand" 
                : "text-gray-500 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon size={22} />
            <span className="hidden md:block font-medium">{item.label}</span>
            {active === item.id && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute left-0 w-1 h-6 bg-brand rounded-r-full"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
          <Settings size={22} />
          <span className="hidden md:block font-medium">Settings</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
          <LogOut size={22} />
          <span className="hidden md:block font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
