import React, { useContext } from 'react'
import img from "../../assets/images/login/login.svg"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate("/")
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left mr-5">
      
     <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl  font-bold">Login now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div>
        <p className='my-4 text-center'>New to Car Doctor?  <Link className='text-orange-600' to="/signup">Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
