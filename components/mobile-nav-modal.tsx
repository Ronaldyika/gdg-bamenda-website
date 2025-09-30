'use client';
import React from 'react';
import { items } from '@/data/data';
import { smoothScrollTo } from '@/lib/smooth-scroll';

interface MobileNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

function MobileNavModal({ isOpen, onClose, onNavigate }: MobileNavModalProps) {
  const handleNavigation = (item: string) => {
    const sectionId = item.toLowerCase();
    smoothScrollTo(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-in slide-in-from-right-full">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:bg-accent/10 hover:text-accent rounded-lg transition-all duration-200 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 shadow-sm">
              Get Your Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavModal;
