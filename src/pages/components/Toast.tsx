import { type } from 'os';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  setMessage: (s: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  setMessage,
}) => {
  const [visible, setVisible] = useState(true);
  const [displayText, setDisplayText] = useState<string | undefined>('');
  console.log(message, type);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setDisplayText('');
      setMessage('');
    }, duration);

    setDisplayText(message.split('-/-')[0]);

    return () => clearTimeout(timer);
  }, [duration, message]);

  return visible ? (
    <div
      className={`animate-opacity fixed bottom-[50px] max-w-xl translate-y-0 rounded-lg px-4 py-2 text-center text-white opacity-100 shadow-md transition-transform ${
        message?.split('-/-')[1] === 'ERROR' ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      {displayText}
    </div>
  ) : null;
};

export default Toast;
