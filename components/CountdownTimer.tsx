
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 43,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-2">
      {[
        { value: timeLeft.hours, label: 'H' },
        { value: timeLeft.minutes, label: 'M' },
        { value: timeLeft.seconds, label: 'S' }
      ].map((item, idx) => (
        <div key={idx} className="flex items-baseline space-x-1">
          <div className="bg-black text-cjgb-yellow w-10 h-10 flex items-center justify-center text-lg font-black rounded-lg">
            {item.value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] font-black text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
