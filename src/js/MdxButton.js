import React from "react";

/**
 * A reusable styled <span> component for inline styles in MDX.
 * @param {object} props - React props
 * @param {object} props.style - Inline style object
 * @param {React.ReactNode} props.children - Content inside the span
 */


const variantStyles = {
  primary: {
    color: 'white',
    backgroundColor: '#337ab7',
    border: '1px solid #2e6da4',
  },
  success: {
    color: 'white',
    backgroundColor: '#5cb85c',
    border: '1px solid #4cae4c',
  },
  danger: {
    color: 'white',
    backgroundColor: '#c9302c',
    border: '1px solid #ac2925',
  },
};

const defaultStyle = {
  padding: '4px',
  borderRadius: '4px',
  border: '1px solid #c6c7c8',
};


/**
 * MdxButton component with variant support.
 * @param {object} props
 * @param {object} [props.style] - Inline style overrides
 * @param {string} [props.variant] - 'success' | 'danger' | undefined
 * @param {React.ReactNode} props.children
 */
const MdxButton = ({ style = {}, variant, children }) => {
  let variantStyle = {};
  if (variant && variantStyles[variant]) {
    variantStyle = variantStyles[variant];
  }
  const baseStyle = variant ? { ...defaultStyle, ...variantStyle } : defaultStyle;
  return (
    <span style={{ ...baseStyle, ...style }}>{children}</span>
  );
};

export default MdxButton;
