import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface signinInputForm {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinInputForm>();
  const onSubmit: SubmitHandler<signinInputForm> = (data) => console.log(data);

  return (
    <>
      <form className="signIn" onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <div className="input-form ">
          <i className="fa-solid fa-user"></i>
          <input
          className="input"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div className="input-form  ">
          <i className="fa-solid fa-lock"></i>
          <input
          className="input"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <input className="btn" type="submit" value="Login" />
        <p>or sign in with social media</p>
        <div className="social-media">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </form>
    </>
  );
};

export default SignIn;
