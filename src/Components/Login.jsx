// import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ? location.state.from.pathname : '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then(result => {
                console.log("success", result.user);
                navigate(from);
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="">
                <div className="flex items-center justify-center gap-20 mt-10">
                    <div className="">
                        <h1 className="text-5xl font-bold text-white">Please Login!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Enter Password" className="input input-bordered" />
                                <div className='flex justify-between'>
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover">New Here? Register</Link>
                                    </label>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;