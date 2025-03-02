import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

// export const CardContent = ({ children, className }) => (
//   <div className={`flex flex-col items-center text-center ${className}`}>
//     {children}
//   </div>
// );

export const CardContent = ({ children, className }) => (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
  