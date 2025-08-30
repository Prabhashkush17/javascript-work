import React from 'react';

const SimpleCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const date = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null); // Empty slots
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="max-w-xs mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-center text-lg font-semibold mb-2">
        {today.toLocaleString('default', { month: 'long' })} {year}
      </h2>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className={`h-8 flex items-center justify-center rounded ${
              day === date ? 'bg-blue-500 text-white font-bold' : 'text-gray-800'
            }`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCalendar;
