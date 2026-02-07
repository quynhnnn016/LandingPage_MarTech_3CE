
import React, { useState, useEffect } from 'react';
import { SocialNotification } from '../types';

interface SocialProofPopupProps {
  notifications: SocialNotification[];
  isEditing: boolean;
  onUpdate: (notifications: SocialNotification[]) => void;
}

const SocialProofPopup: React.FC<SocialProofPopupProps> = ({ notifications, isEditing, onUpdate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showManager, setShowManager] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setIsVisible(true);
      return;
    }

    const showTimer = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, 5000);
    }, 8000);

    return () => clearInterval(showTimer);
  }, [notifications, isEditing]);

  if (notifications.length === 0 && !isEditing) return null;

  const current = notifications[currentIndex] || { message: 'Bắt đầu thêm thông báo...', timeAgo: 'Vừa xong' };

  const handleAdd = () => {
    const newNotif = { id: Date.now().toString(), message: 'Thông báo mới...', timeAgo: 'Vừa xong' };
    onUpdate([...notifications, newNotif]);
  };

  const handleRemove = (id: string) => {
    onUpdate(notifications.filter(n => n.id !== id));
  };

  const handleEdit = (id: string, message: string) => {
    onUpdate(notifications.map(n => n.id === id ? { ...n, message } : n));
  };

  return (
    <div className={`fixed bottom-6 left-6 z-[95] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'}`}>
      <div className="bg-white border-4 border-black p-3 flex flex-col shadow-[12px_12px_0px_0px_rgba(255,210,0,1)] min-w-[260px] max-w-[320px]">
        
        {isEditing && (
          <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-black">
            <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">Notification Editor</span>
            <button 
              onClick={() => setShowManager(!showManager)}
              className="text-[10px] font-black uppercase underline hover:text-cjgb-yellow"
            >
              {showManager ? 'Thu gọn' : 'Quản lý danh sách'}
            </button>
          </div>
        )}

        {showManager && isEditing ? (
          <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {notifications.map((n) => (
              <div key={n.id} className="flex flex-col space-y-2 p-2 bg-gray-50 border border-gray-200">
                <input 
                  value={n.message}
                  onChange={(e) => handleEdit(n.id, e.target.value)}
                  className="text-xs font-bold p-1 border border-black focus:bg-cjgb-yellow/20 outline-none"
                  placeholder="Nội dung thông báo..."
                />
                <div className="flex justify-between items-center">
                  <input 
                    value={n.timeAgo}
                    onChange={(e) => onUpdate(notifications.map(item => item.id === n.id ? { ...item, timeAgo: e.target.value } : item))}
                    className="text-[10px] p-1 border border-gray-300 w-1/2 outline-none"
                    placeholder="Thời gian..."
                  />
                  <button onClick={() => handleRemove(n.id)} className="text-red-600 text-[10px] font-black uppercase">Xóa</button>
                </div>
              </div>
            ))}
            <button 
              onClick={handleAdd}
              className="w-full py-2 bg-black text-cjgb-yellow text-[10px] font-black uppercase tracking-widest hover:bg-gray-800"
            >
              + Thêm thông báo
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="bg-cjgb-yellow w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-tight leading-tight">{current.message}</p>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{current.timeAgo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialProofPopup;
