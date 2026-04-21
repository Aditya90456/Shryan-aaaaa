import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, Shield, ArrowRight, CheckCircle2, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (amount: number) => void;
}

export default function PaymentForm({ isOpen, onClose, onSuccess }: PaymentFormProps) {
  const [step, setStep] = React.useState<'form' | 'processing' | 'success'>('form');
  const [amount, setAmount] = React.useState('1250.00');

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      onSuccess(parseFloat(amount));
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md glass rounded-3xl p-8 shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-display font-bold">New Payment</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">$</span>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-10 pr-4 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                   <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Payment Method</label>
                   <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-brand text-white border border-brand">
                        <CreditCard size={24} />
                        <span className="font-medium">Card</span>
                      </button>
                      <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Wallet size={24} />
                        <span className="font-medium">Crypto</span>
                      </button>
                   </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand/10 border border-brand/20 flex items-start gap-3">
                  <Shield className="text-brand shrink-0" size={20} />
                  <p className="text-xs text-brand/90 leading-relaxed">
                    Zenith Secure Core™ is protecting this transaction. Your payment info is encrypted end-to-edge.
                  </p>
                </div>
              </div>

              <button
                onClick={handlePay}
                className="w-full bg-brand hover:bg-brand-light text-white font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Complete Payment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 flex flex-col items-center gap-6"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-brand/20 rounded-full" />
                <motion.div
                  className="absolute inset-0 border-4 border-brand border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-display">Processing Payment</h3>
                <p className="text-gray-400">Validating through Zenith Secure Core™</p>
              </div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <CheckCircle2 size={48} />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold font-display">Payment Successful</h3>
                <p className="text-gray-400">Transaction ID: #ZX-2094-884</p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all font-medium"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
