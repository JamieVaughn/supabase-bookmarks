
function InputField (props) {
  const { id, title, handleChange, pattern, maxLength, required, help, value } = props

  return (
    <div>
      <label className='capitalize' htmlFor={id}>{title ?? id}</label>
      <input 
      required={required ?? true}
      id={id}
      type="text" 
      pattern={pattern}
      maxLength={maxLength}
      placeholder={`Provide your ${id}`}
      value={value}
      onChange={handleChange}
      />
      <span>{help && <sup>{help}</sup>}</span>
    </div>
  )
}

export default InputField