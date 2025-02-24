import React from 'react'

export const Login = () => {
  return (
    
    <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" required />
                    
                </div>
            </form>
        </div>
    </div>
  )
}
