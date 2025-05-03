import React from 'react';

type Props = {
  label: string;
  position?: string;
};

const Label = ({ label, position }: Props) => {
  return (
    <div className={`flex items-center gap-2 mb-4 ${position === 'left' ? 'sm:justify-start justify-center' : 'justify-center'}`}>
      <h3 className="text-[var(--primaryDarkGreen)] text-lg font-semibold uppercase tracking-wide">
        {label}
      </h3>
      <div className="flex items-center">
        <span className="w-8 h-1 bg-purple-600 rounded-l-full"></span>
        <span className="w-2 h-2 bg-purple-600 rounded-full ml-1"></span>
      </div>
    </div>
  );
};

export default Label;
