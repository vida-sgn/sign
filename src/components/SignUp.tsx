import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SignUpFormInputs {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const onSubmit: SubmitHandler<SignUpFormInputs> = data => console.log(data);

  return (
    <form className="signUp" onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <div className="input-form">
        <i className="fa-solid fa-user"></i>
        <input 
          type="text" 
          placeholder="Username" 
          {...register('username', { required: true })} 
        />
        {errors.username && <span>This field is required</span>}
      </div>
      <div className="input-form">
        <i className="fa-solid fa-envelope"></i>
        <input 
          type="email" 
          placeholder="Email" 
          {...register('email', { required: true })} 
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="input-form">
        <i className="fa-solid fa-lock"></i>
        <input 
          type="password" 
          placeholder="Password" 
          {...register('password', { required: true })} 
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <input className="btn" type="submit" value="Sign Up" />
      <p>Or sign in with social media</p>
      <div className="social-media">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
    </form>
  );
}

export default SignUp;
