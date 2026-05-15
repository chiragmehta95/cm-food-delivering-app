import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signInWithOtp, verifyOtp, loading } = useAuth()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState('phone') // 'phone' or 'otp'
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSendOtp = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number')
      return
    }

    const result = await signInWithOtp(phone)
    if (result.success) {
      setMessage('OTP sent successfully!')
      setStep('otp')
    } else {
      setError(result.error || 'Failed to send OTP')
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      return
    }

    const result = await verifyOtp(phone, otp)
    if (result.success) {
      setMessage('Login successful!')
      setStep('phone')
      setPhone('')
      setOtp('')
    } else {
      setError(result.error || 'Failed to verify OTP')
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Login</h1>

      {step === 'phone' ? (
        <form onSubmit={handleSendOtp}>
          <div
            style={{
              border: '1px solid #ddd',
              padding: 20,
              borderRadius: 10
            }}
          >
            <label style={{ display: 'block', marginBottom: 10 }}>
              Phone Number (10 digits)
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              maxLength="10"
              style={{
                padding: 10,
                width: '100%',
                marginBottom: 20,
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: 5
              }}
              disabled={loading}
            />

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#FF6B35',
                color: 'white',
                border: 'none',
                borderRadius: 5,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <div
            style={{
              border: '1px solid #ddd',
              padding: 20,
              borderRadius: 10
            }}
          >
            <p style={{ marginBottom: 20 }}>
              OTP sent to +91{phone}
            </p>

            <label style={{ display: 'block', marginBottom: 10 }}>
              Enter OTP (6 digits)
            </label>
            <input
              type="text"
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              maxLength="6"
              style={{
                padding: 10,
                width: '100%',
                marginBottom: 20,
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: 5,
                fontSize: 20,
                letterSpacing: 5
              }}
              disabled={loading}
            />

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#FF6B35',
                color: 'white',
                border: 'none',
                borderRadius: 5,
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: 10,
                opacity: loading ? 0.6 : 1
              }}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep('phone')
                setOtp('')
              }}
              style={{
                width: '100%',
                padding: '12px',
                background: '#ccc',
                color: '#333',
                border: 'none',
                borderRadius: 5,
                cursor: 'pointer'
              }}
            >
              Back
            </button>
          </div>
        </form>
      )}

      {message && (
        <div
          style={{
            marginTop: 15,
            padding: 10,
            background: '#d4edda',
            color: '#155724',
            borderRadius: 5,
            border: '1px solid #c3e6cb'
          }}
        >
          ✅ {message}
        </div>
      )}

      {error && (
        <div
          style={{
            marginTop: 15,
            padding: 10,
            background: '#f8d7da',
            color: '#721c24',
            borderRadius: 5,
            border: '1px solid #f5c6cb'
          }}
        >
          ❌ {error}
        </div>
      )}
    </div>
  )
}
