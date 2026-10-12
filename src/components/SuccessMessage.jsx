

const SuccessMessage = ({name,onReset}) => {
  return (
    <div>
        <div>
            *
        </div>
        <h1>Registration Successful!</h1>

        <p>
            Welcome, {name}!
        </p>

        <p>
            Your Form passed client side validation!
        </p>

      
      <button 
      type="button"
      onClick={onReset}
      >
        Register Another User

      </button>
    </div>
  )
}

export default SuccessMessage
