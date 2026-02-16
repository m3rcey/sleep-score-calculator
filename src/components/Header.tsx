import { Moon, Sparkles } from 'lucide-react';

/**
 * App header with branding - clickable to go home
 */
export function Header() {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={goHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-white text-lg leading-tight">
                SleepScore
              </h1>
              <p className="text-xs text-gray-400">Smart Mattress ROI</p>
            </div>
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            <span className="text-xs font-medium text-primary-400">Free Tool</span>
          </div>
        </div>
      </div>
    </header>
  );
}
