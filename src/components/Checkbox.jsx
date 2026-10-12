

const Checkbox = ({checked,onChange,error}) => {
  return (
    <div>
        <label>
        <input type="checkbox"
        name="terms"
        checked={checked}
        onChange={onChange}
        />

        <span>
            I agree to the{" "}
            <span>
                terms & conditions
            </span>
            .
        </span>
        </label>

        {error&&
<p id={`${name}-error`} role="alert" className="text-red-600">
{error}
</p>}
      
    </div>
  )
}

export default Checkbox
