
import React, { useRef } from 'react';

interface ImageEditorProps {
  src: string;
  alt: string;
  onImageChange: (newUrl: string) => void;
  isEditing: boolean;
  className?: string;
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  src,
  alt,
  onImageChange,
  isEditing,
  className = ''
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className={`relative group/img h-full w-full ${isEditing ? 'cursor-pointer' : ''} ${className}`}>
      <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
      
      {isEditing && (
        <>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
          <div 
            onClick={handleClick}
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10"
          >
            <div className="bg-cjgb-yellow text-black p-3 rounded-full mb-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <span className="text-white text-[10px] font-black uppercase tracking-widest text-center px-2">Tải Ảnh Lên</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageEditor;
