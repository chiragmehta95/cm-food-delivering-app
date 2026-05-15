function Login() {
  return (
    <div>
      <h1>Login</h1>

      <div
        style={{
          border: '1px solid #ddd',
          padding: 20,
          borderRadius: 10
        }}
      >
        <input
          type="text"
          placeholder="Enter Mobile Number"
          style={{
            padding: 10,
            width: '100%',
            marginBottom: 20
          }}
        />

        <button>
          Send OTP
        </button>
      </div>
    </div>
  )
}

export default Login