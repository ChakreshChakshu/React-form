

const FormInput = ({label,name,type,value,onChange,placeholder,error}) => {
console.log(value)


  return (
   <div>
    <label htmlFor={name}>{label}</label>
    <input 
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
{error&&
<p id={`${name}-error`} role="alert" className="text-red-600">
{error}
</p>

}




   </div>
  )
}

export default FormInput
