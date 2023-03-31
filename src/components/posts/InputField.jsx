
function InputField (props) {
  const { id, title, handleChange, pattern, required, help, value } = props

  return (
    <div className="field">
      <label className="label" style={{textTransform: 'capitalize'}} htmlFor={id}>{title ?? id}</label>
      <div className="control">
        <input 
        required={required ?? true}
        id={id}
        className="input" 
        type="text" 
        pattern={pattern}
        placeholder={`Provide your ${id}`}
        value={value}
        onChange={handleChange}
        />
        {help && <p className='help is-info'>{help}</p>}
      </div>
    </div>
  )
}

export default InputField