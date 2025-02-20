import React from 'react';

function Button({ onClick, children }) {
  const buttonStyle = {
    backgroundColor: '#339af0',
    border: 'none',
    color: '#fff',
    padding: '10px 16px',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '4px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
