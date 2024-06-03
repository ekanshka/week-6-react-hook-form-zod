import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { formFields, signupSchema } from "../types";


export const SignupForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<formFields>({resolver: zodResolver(signupSchema)});

    const onSubmit:SubmitHandler<formFields> = async (data) => {
        await new Promise((resolve) => {setTimeout(resolve, 1000)})
        console.log(data)
    }

  return (
    <form className="flex flex-col gap-5 w-[50%] border-2 border-white rounded-3xl p-10" onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup</h1>
        <input type="text" {...register("email")} className="p-3 px-5 rounded-md" placeholder="Email"/>
        {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        <input type="password" {...register("password")} className="p-3 px-5 rounded-md" placeholder="Password"/>
        {errors.password && <div className="text-red-500">{errors.password.message}</div>}
        <input type="password" {...register("confirmPassword")} className="p-3 px-5 rounded-md" placeholder="Confirm Password"/>
        {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
        <button type="submit" disabled={ isSubmitting } className="p-3">
            {
                isSubmitting ?
                "Loading..." :
                "Submit" 
            }
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  )
}
