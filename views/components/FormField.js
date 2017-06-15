import React from 'react';

const FormField = props => {
  const { label, type, fieldName, isRequired, value } = props;
  let requiredField, requiredAttr, inputStyle;
  inputStyle = type === 'hidden' ? '' : 'form-field';
  if (isRequired) {
    requiredField = <span className="required-asterisk">*</span>
    requiredAttr = 'required'
  }
  
  return (
    <div className={inputStyle}>
      <input className='form-control' name={fieldName} id={label} type={type} required={isRequired} value={value} />
      <label for={fieldName}>{label}</label>
      { requiredField }
    </div>
  );
  
}
  
export default FormField;