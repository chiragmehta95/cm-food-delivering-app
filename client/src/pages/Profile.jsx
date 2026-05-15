function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      <div
        style={{
          border: '1px solid #ddd',
          padding: 20,
          borderRadius: 10
        }}
      >
        <input
          placeholder="Name"
          style={{
            display: 'block',
            marginBottom: 10,
            padding: 10,
            width: '100%'
          }}
        />

        <input
          placeholder="Mobile Number"
          style={{
            display: 'block',
            marginBottom: 10,
            padding: 10,
            width: '100%'
          }}
        />

        <input
          placeholder="Address"
          style={{
            display: 'block',
            marginBottom: 10,
            padding: 10,
            width: '100%'
          }}
        />

        <button>
          Save Profile
        </button>
      </div>
    </div>
  )
}

export default Profile