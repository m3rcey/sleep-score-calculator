import { Moon, DollarSign, Coffee, Bed, Calculator, RotateCcw } from 'lucide-react';
import { SLEEP_DISRUPTORS, DEFAULT_MATTRESS_PRICE } from '../utils/constants';
import { formatCurrency } from '../utils/calculations';
import type { CalculatorInputs } from '../types';

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  onIncomeChange: (value: number) => void;
  onCaffeineChange: (value: number) => void;
  onMattressPriceChange: (value: number) => void;
  onDisruptorToggle: (id: string) => void;
  onCalculate: () => void;
  onReset: () => void;
}

/**
 * Main calculator input form component
 * Mobile-first design with large touch targets
 */
export function CalculatorForm({
  inputs,
  onIncomeChange,
  onCaffeineChange,
  onMattressPriceChange,
  onDisruptorToggle,
  onCalculate,
  onReset,
}: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4">
          <Moon className="w-8 h-8 text-primary-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Smart Sleep Score
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Calculate the ROI of investing in better sleep
        </p>
      </div>

      {/* Income Input */}
      <div className="card">
        <label className="section-title flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary-600" />
          Annual Income
        </label>
        <p className="text-sm text-gray-400 mb-3">
          Used to calculate productivity impact
        </p>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-semibold">
            $
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="1000"
            value={inputs.annualIncome || ''}
            onChange={(e) => onIncomeChange(Number(e.target.value))}
            className="input-touch pl-10"
            placeholder="75000"
            aria-label="Annual income"
          />
        </div>
      </div>

      {/* Sleep Disruptors */}
      <div className="card">
        <label className="section-title flex items-center gap-2">
          <Bed className="w-5 h-5 text-primary-400" />
          Sleep Issues Affecting You
        </label>
        <p className="text-sm text-gray-400 mb-4">
          Select all that apply to calculate your sleep costs
        </p>
        <div className="space-y-3">
          {SLEEP_DISRUPTORS.map((disruptor) => (
            <label
              key={disruptor.id}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-700 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={inputs.selectedDisruptors.includes(disruptor.id)}
                onChange={() => onDisruptorToggle(disruptor.id)}
                className="checkbox-touch mt-0.5"
                aria-label={disruptor.label}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-white text-sm sm:text-base">
                    {disruptor.label}
                  </span>
                  <span className="text-primary-400 font-semibold text-sm whitespace-nowrap">
                    +{formatCurrency(disruptor.cost)}/yr
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  {disruptor.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Caffeine Spending */}
      <div className="card">
        <label className="section-title flex items-center gap-2">
          <Coffee className="w-5 h-5 text-primary-400" />
          Monthly Caffeine Spending
        </label>
        <p className="text-sm text-gray-400 mb-3">
          Coffee, energy drinks, supplements to combat fatigue
        </p>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-semibold">
            $
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="5"
            value={inputs.monthlyCaffeine || ''}
            onChange={(e) => onCaffeineChange(Number(e.target.value))}
            className="input-touch pl-10"
            placeholder="75"
            aria-label="Monthly caffeine spending"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Default: $75/month (~$2.50/day)
        </p>
      </div>

      {/* Mattress Price */}
      <div className="card">
        <label className="section-title flex items-center gap-2">
          <Bed className="w-5 h-5 text-primary-400" />
          Smart Mattress Investment
        </label>
        <p className="text-sm text-gray-400 mb-3">
          Price of the smart mattress you&apos;re considering
        </p>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-semibold">
            $
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="100"
            value={inputs.mattressPrice || ''}
            onChange={(e) => onMattressPriceChange(Number(e.target.value))}
            className="input-touch pl-10"
            placeholder={DEFAULT_MATTRESS_PRICE.toString()}
            aria-label="Mattress price"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Default: {formatCurrency(DEFAULT_MATTRESS_PRICE)} (average smart mattress)
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          onClick={onCalculate}
          className="btn-primary"
          aria-label="Calculate sleep score"
        >
          <Calculator className="w-5 h-5" />
          Calculate My Score
        </button>
        <button
          onClick={onReset}
          className="btn-secondary"
          aria-label="Reset form"
        >
          <RotateCcw className="w-5 h-5" />
          Start Over
        </button>
      </div>
    </div>
  );
}