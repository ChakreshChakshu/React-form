

const SubmitButton = ({text,disabled=false}) => {
  return (
    <div>
        <button
        type="submit"
        disabled={disabled}
        >

{text}

        </button>
      
    </div>
  )
}

export default SubmitButton
