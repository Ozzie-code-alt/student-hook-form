"use client"
import { SubmitHandler, useForm } from "react-hook-form";

type FormFieldsProps = {
  email: string;
  password: string;
};

export default function Home() {
  // we destructure register here for us to use on our forms
  const { register, handleSubmit } = useForm<FormFieldsProps>();

  //Submit Handler means on Submit then accepts forms only and their corresponding values
  const handleSubmitForm: SubmitHandler<FormFieldsProps> = (data) => {
    console.log(data);
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleSubmitForm)}>
      <input {...register('email')} type='text' placeholder='Email' />
      <input {...register('password')} type='text' placeholder='Password' />
      <button type='submit'>Submit</button>
    </form>
  );
}
