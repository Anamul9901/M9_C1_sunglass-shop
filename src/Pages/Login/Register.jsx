import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
 
// import { useContext } from 'react';
// import { AuthContex } from '../../Provider/AuthProvider';

const Register = () => {

    // const {createUser} = useContext(AuthContex); // aitak custom hook banye use korbo

    const { createUser } = useAuth();  // this is custom hook

    const handleSubmit = (event) => {
        event.preventDefault();

        //get field values
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const password = event.target.password.value;
        console.log(name, email, image, password);

        // validation
        if (password.length < 6) {
            toast.error('password must be at least 6 charecters');
            return;
        }

        createUser( email, password)
            .then(result =>{
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text"
                                        name='name'
                                        placeholder="Full name" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name='email'
                                        placeholder="email" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text"
                                        name='image'
                                        placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name='password'
                                        placeholder="password" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button type='submit' className="btn btn-neutral">Register</button>
                                </div>
                            </form>

                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;