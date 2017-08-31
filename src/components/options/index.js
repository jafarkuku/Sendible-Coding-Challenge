import React from 'react'

/**
  *	Dropdown list item Component
  */
const Option = ({label, exempt, onClick}) => (
  <div onClick={() => onClick(exempt, label)} value={label}>{label}</div>
)

export default Option;
