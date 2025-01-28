import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Zap className="w-8 h-8 text-yellow-400" />
        <div className="absolute -inset-1 blur-sm bg-yellow-400/30 rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-md my-0 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Kalki Toast Pro
        </span>
        <span className="text-[.5rem] font-medium -mt-2 text-gray-500 tracking-wider">PREMIUM</span>
      </div>
    </div>
  );
};

export default Logo;