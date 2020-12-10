import React from 'react';
import { useSelector } from 'react-redux';

export default function Notification() {
  const notification = useSelector((state) => state.notification);

  return (
    <div className="notification" style={{ color: notification.color }}>
      {notification.message}
    </div>
  );
}
