import React from 'react';

function Loading() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-b-4 border-black-500 animate-spin"></div>
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-b-4 border-blue-500 animate-ping"></div>
    </div>
  );
}

export default Loading;
