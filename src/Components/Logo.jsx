// import React from 'react';

// export default function Logo({ className = "" }) {
//   return (
//     <div className={`flex items-center gap-1 ${className}`}>
//       <svg
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="flex-shrink-0"
//       >
//         {/* Location pin with car icon */}
//         <path
//           d="M20 2C13.383 2 8 7.383 8 14c0 8 12 22 12 22s12-14 12-22c0-6.617-5.383-12-12-12z"
//           fill="#E95420"
//         />
//         <circle cx="20" cy="14" r="5" fill="white" />
//         {/* Simplified car shape */}
//         <path
//           d="M16 12h8l1.5 2H14.5l1.5-2z"
//           fill="#E95420"
//         />
//         <rect x="17" y="14" width="6" height="3" rx="0.5" fill="#E95420" />
//       </svg>
//       <div className="flex flex-col leading-tight">
//         <span className="text-[#E95420]" style={{ fontWeight: 700 }}>FIND</span>
//         <span className="text-gray-800 text-xs tracking-wide">TRANSPORTATION</span>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import '../Styles/Logo.css'; // Import the CSS file

export default function Logo({ className = "" }) {
  return (
    <div className={`logo-container ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Location pin with car icon */}
        <path
          d="M20 2C13.383 2 8 7.383 8 14c0 8 12 22 12 22s12-14 12-22c0-6.617-5.383-12-12-12z"
          fill="#E95420"
        />
        <circle cx="20" cy="14" r="5" fill="white" />
        {/* Simplified car shape */}
        <path
          d="M16 12h8l1.5 2H14.5l1.5-2z"
          fill="#E95420"
        />
        <rect x="17" y="14" width="6" height="3" rx="0.5" fill="#E95420" />
      </svg>
      <div className="logo-text">
        <span className="logo-title">FIND</span>
        <span className="logo-subtitle">TRANSPORTATION</span>
      </div>
    </div>
  );
}
