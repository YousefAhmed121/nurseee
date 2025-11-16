
import React from 'react';

export const Header: React.FC = () => (
  <header className="text-center mb-6 bg-white p-6 sm:p-8 rounded-2xl shadow-md animate-fade-in">
    <h1 className="text-blue-900 text-3xl sm:text-4xl font-extrabold mb-2">منصة الاختبارات</h1>
    <p className="text-base sm:text-lg text-gray-600">اختبر معلوماتك في المواد الطبية</p>
  </header>
);

const fadeInAnimation = `
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
`;

// Inject animation styles
const styleSheet = document.createElement("style");
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);