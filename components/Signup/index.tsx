import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { useState } from "react";
import { Check } from "@/public/icons";
import Button, { butonTypes, variantTypes } from "../Button";
import Logo from "@/public/logo2.svg";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup.string().email("Email is Invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  user_name: yup.string().required("User name is required"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [remember, setRemember] = useState(false);

  const onSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <div className="w-full">
      <p className="text-white text-2xl lg:text-3xl font-bold text-center">
        Sign Up to your BitPool Account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-2">
          <Input
            name="first_name"
            label="FIRST NAME"
            register={register("first_name")}
            error={errors.first_name?.message}
            placeholder="Enter your first name"
          />
          <Input
            name="last_name"
            label="LAST NAME"
            register={register("last_name")}
            error={errors.last_name?.message}
            placeholder="Enter your last name"
          />
        </div>
        <Input
          name="username"
          label="USERNAME"
          register={register("username")}
          error={errors.username?.message}
          placeholder="Enter your username"
        />
        <Input
          name="email"
          label="EMAIL"
          register={register("email")}
          error={errors.email?.message}
          placeholder="Enter your email"
        />
        <Input
          name="password"
          label="PASSWORD"
          register={register("password")}
          error={errors.password?.message}
          placeholder="Enter your password"
          type="password"
        />

        <div className="mt-10 flex items-center gap-4">
          <div
            onClick={() => setRemember(!remember)}
            className={`h-8 w-8 rounded transition-all duration-300 flex justify-center cursor-pointer items-center ${
              !remember
                ? "border border-primary-750 bg-transparent"
                : "bg-secondary-100 border border-secondary-100"
            }`}
          >
            {remember && <Check />}
          </div>
          <p className="text-xl text-white font-medium">Remember me</p>
        </div>

        <div className="lg:mt-12 mt-10 w-full">
          <Button
            variant={variantTypes.full}
            isFull
            type={butonTypes.submit}
            px="px-4"
            text="SIGN IN"
          />
        </div>
      </form>

      <div className="lg:mt-24 mt-14 flex flex-col justify-center items-center lg:gap-10 gap-16">
        <Link href="#" className="font-medium text-lg text-white">
          Already have an account ?{" "}
          <span className="text-secondary-100">Sign In</span>
        </Link>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="lg:text-xl text-base text-white font-light">
            POWERED BY
          </div>
          <Image
            priority={true}
            height={30}
            width={130}
            src={Logo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
