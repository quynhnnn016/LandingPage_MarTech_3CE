
import React, { useState, useRef, useEffect } from 'react';
import { TextStyles } from '../types';

interface EditableTextProps {
  value: string;
  onChange: (newValue: string) => void;
  isEditing: boolean;
  className?: string;
  multiline?: boolean;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  styles?: TextStyles;
  onStyleChange?: (newStyles: TextStyles) => void;
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  isEditing,
  className = '',
  multiline = false,
  tagName: Tag = 'span',
  styles = {} as TextStyles,
  onStyleChange
}) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive]);

  if (!isEditing) {
    return (
      <Tag 
        className={`${className}`} 
        style={{ 
          fontSize: styles.fontSize, 
          color: styles.color, 
          fontWeight: styles.fontWeight,
          textAlign: styles.textAlign,
          textDecoration: styles.textDecoration,
          fontStyle: styles.fontStyle,
          fontFamily: styles.fontFamily,
          display: 'block'
        }}
      >
        {value}
      </Tag>
    );
  }

  const handleStyleUpdate = (updates: Partial<TextStyles>) => {
    if (onStyleChange) {
      onStyleChange({ ...styles, ...updates });
    }
  };

  const fontSizes = [
    { label: 'XS', value: '0.75rem' },
    { label: 'SM', value: '0.875rem' },
    { label: 'MD', value: '1rem' },
    { label: 'LG', value: '1.25rem' },
    { label: 'XL', value: '1.5rem' },
    { label: '2XL', value: '2.5rem' },
    { label: '4XL', value: '4rem' },
    { label: '6XL', value: '6rem' }
  ];

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block w-full transition-all ${isActive ? 'z-[120]' : ''}`}
      onClick={() => setIsActive(true)}
    >
      {isActive && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-[130] bg-zinc-900 text-white p-2 rounded-xl shadow-2xl flex flex-col space-y-2 border border-zinc-700 animate-in fade-in slide-in-from-bottom-2 duration-200 min-w-max">
          
          <div className="flex items-center space-x-3">
            {/* FONT FAMILY */}
            <div className="flex bg-zinc-800 rounded-lg p-1 space-x-1">
              <button 
                onClick={() => handleStyleUpdate({ fontFamily: "'Inter', sans-serif" })}
                className={`px-2 py-1 text-[10px] font-bold rounded ${styles.fontFamily?.includes('Inter') ? 'bg-cjgb-yellow text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                BOLD
              </button>
              <button 
                onClick={() => handleStyleUpdate({ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' })}
                className={`px-2 py-1 text-[10px] italic font-serif rounded ${styles.fontFamily?.includes('Playfair') ? 'bg-cjgb-yellow text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                GENTLE
              </button>
            </div>

            <div className="w-[1px] h-6 bg-zinc-700" />

            {/* FONT SIZE PRESETS */}
            <div className="flex bg-zinc-800 rounded-lg p-1 space-x-1 overflow-x-auto max-w-[200px] custom-scrollbar">
              {fontSizes.map((size) => (
                <button 
                  key={size.label}
                  onClick={() => handleStyleUpdate({ fontSize: size.value })}
                  className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${styles.fontSize === size.value ? 'bg-cjgb-yellow text-black' : 'text-zinc-400 hover:text-white'}`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* BASIC FORMATTING */}
            <div className="flex space-x-1 bg-zinc-800 rounded-lg p-1">
              <button 
                onClick={() => handleStyleUpdate({ fontWeight: styles.fontWeight === '900' ? '400' : '900' })}
                className={`p-1.5 rounded hover:bg-zinc-700 ${styles.fontWeight === '900' ? 'text-cjgb-yellow' : 'text-zinc-400'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9h-3.5v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
              </button>
              <button 
                onClick={() => handleStyleUpdate({ fontStyle: styles.fontStyle === 'italic' ? 'normal' : 'italic' })}
                className={`p-1.5 rounded hover:bg-zinc-700 ${styles.fontStyle === 'italic' ? 'text-cjgb-yellow' : 'text-zinc-400'}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>
              </button>
            </div>

            <div className="w-[1px] h-6 bg-zinc-700" />

            {/* ALIGNMENT */}
            <div className="flex space-x-1 bg-zinc-800 rounded-lg p-1">
              {(['left', 'center', 'right'] as const).map((align) => (
                <button 
                  key={align}
                  onClick={() => handleStyleUpdate({ textAlign: align })}
                  className={`p-1.5 rounded hover:bg-zinc-700 ${styles.textAlign === align ? 'text-cjgb-yellow' : 'text-zinc-400'}`}
                >
                  {align === 'left' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>}
                  {align === 'center' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 15h10v2H7v-2zm0-8h10v2H7V7zm-4 6h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>}
                  {align === 'right' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 15h12v2H9v-2zm0-8h12v2H9V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>}
                </button>
              ))}
            </div>

            <div className="w-[1px] h-6 bg-zinc-700" />

            {/* COLORS */}
            <div className="flex space-x-1.5 bg-zinc-800 rounded-lg p-1 px-2">
              {[
                { name: 'Black', hex: '#000000' },
                { name: 'Gray', hex: '#6B7280' },
                { name: 'Yellow', hex: '#FFD200' },
                { name: 'Red', hex: '#DC2626' },
                { name: 'White', hex: '#FFFFFF' }
              ].map((c) => (
                <button 
                  key={c.name}
                  onClick={() => handleStyleUpdate({ color: c.hex })}
                  className={`w-4 h-4 rounded-full border border-zinc-600 transition-transform hover:scale-125 ${styles.color === c.hex ? 'ring-2 ring-cjgb-yellow ring-offset-2 ring-offset-zinc-900 scale-110' : ''}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Tag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange(e.currentTarget.textContent || '')}
        style={{ 
          fontSize: styles.fontSize, 
          color: styles.color, 
          fontWeight: styles.fontWeight,
          textAlign: styles.textAlign,
          textDecoration: styles.textDecoration,
          fontStyle: styles.fontStyle,
          fontFamily: styles.fontFamily,
          outline: 'none',
          display: 'block'
        }}
        className={`transition-all duration-300 ${isActive ? 'bg-zinc-50 ring-2 ring-cjgb-yellow p-1 rounded cursor-text' : 'border-b border-transparent hover:border-cjgb-yellow/30'} ${className}`}
        onKeyDown={(e) => {
          if (!multiline && e.key === 'Enter') {
            e.preventDefault();
            e.currentTarget.blur();
            setIsActive(false);
          }
        }}
      >
        {value}
      </Tag>

      {isActive && (
        <div className="absolute -right-2 top-0 h-full w-1 bg-cjgb-yellow animate-pulse rounded-full" />
      )}
    </div>
  );
};

export default EditableText;