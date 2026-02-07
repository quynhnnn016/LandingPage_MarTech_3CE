
import React from 'react';
import { Review } from '../types';

interface DynamicReviewsProps {
  reviews: Review[];
  isEditing: boolean;
  onDelete?: (id: string) => void;
}

const DynamicReviews: React.FC<DynamicReviewsProps> = ({ reviews, isEditing, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      {reviews.map((review, idx) => (
        <div 
          key={review.id}
          className="bg-white border-[2px] border-black overflow-hidden relative group transition-all duration-500 hover:shadow-[10px_10px_0px_0px_rgba(255,210,0,1)] hover:-translate-y-2"
        >
          {isEditing && (
            <button 
              onClick={() => onDelete?.(review.id)}
              className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center z-30 border-2 border-white shadow-xl hover:scale-110 transition-transform text-xs"
            >
              ×
            </button>
          )}

          {/* Social Post Header */}
          <div className="p-3 flex items-center justify-between border-b-2 border-black bg-gray-50">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img src={review.avatar} alt={review.author} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border border-white">
                  <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="font-black text-[9px] uppercase tracking-tighter leading-none truncate">{review.author}</p>
                <p className="text-[8px] font-bold text-gray-500 lowercase truncate">{review.handle}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
                {review.platform === 'instagram' && (
                    <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5 rounded text-white">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.77-2.618 6.97-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.352-2.612-6.77-6.97-6.97C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                )}
                {review.platform === 'tiktok' && (
                    <div className="bg-black p-0.5 rounded text-white">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                    </div>
                )}
            </div>
          </div>

          {/* Social Post Image */}
          {review.postImage && (
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img src={review.postImage} alt="Post content" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-2 right-2 flex text-cjgb-yellow drop-shadow-md">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-[10px]">★</span>
                    ))}
                  </div>
              </div>
          )}

          {/* Social Post Content */}
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center space-x-1 text-red-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <span className="text-[8px] font-black">{review.likes}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                    <span className="text-[8px] font-black italic uppercase">Verified</span>
                </div>
            </div>
            
            <p className="text-black font-bold leading-tight text-[11px] line-clamp-3">
                <span className="font-black mr-1 uppercase tracking-tighter">{review.author}</span>
                {review.content}
            </p>
            
            <div className="mt-3 flex items-center space-x-1 opacity-20">
                <div className="h-[1px] flex-grow bg-gray-400"></div>
                <span className="text-[7px] font-black uppercase whitespace-nowrap">View Comments</span>
                <div className="h-[1px] flex-grow bg-gray-400"></div>
            </div>
          </div>

          {/* Bottom Sticker */}
          <div className="absolute top-1 left-1 z-20">
              <div className="bg-black text-cjgb-yellow px-1.5 py-0.5 text-[7px] font-black uppercase tracking-widest transform -rotate-2 border border-cjgb-yellow">
                #Viral
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicReviews;