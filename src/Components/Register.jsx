// import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // console.log(user);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm.value;
        // console.log(name, email, password, confirm_password);
        if (password === confirm_password) {
            createUser(email, password)
                .then(result => console.log(result.user))
                .catch(error => console.log(error))
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.password.value = '';
            event.target.confirm.value = '';
        }
    }
    return (
        <div>
            <div className="">
                <div className="flex items-center justify-center gap-20 mt-10">
                    <div className="">
                        <h1 className="text-5xl  text-white">New to <span className='font-bold text-yellow-500'>Chef Hub</span>?</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Re-enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already Have an Account? Please login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;