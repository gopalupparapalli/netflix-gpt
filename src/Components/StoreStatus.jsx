import React from 'react';
import { useSelector } from 'react-redux';

const StoreStateViewer = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      <h1>Current User State</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default StoreStateViewer;
