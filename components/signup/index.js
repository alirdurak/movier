"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { signUp, googleAuth } from "@/services/firebase";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const handleGoogleAuth = () => {
    const data = googleAuth();
    data && router.push("/");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = await signUp(values.email, values.password);
      data && router.push("/");
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen text-orange-light ">
      <div className=" p-8 rounded-xl shadow-md w-96  bg-title-gray/10">
        <h1 className="text-2xl font-semibold mb-4 text-title-gray ">
          Sign Up
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              E-mail
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-title-gray  p-2 rounded-md hover:bg-orange-light  hover:text-title-gray transition-colors "
          >
            SignUp
          </button>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleGoogleAuth}
              className="w-full  p-2 rounded-md hover:bg-orange-light  hover:text-title-gray transition-colors "
            >
              Google
            </button>
          </div>
        </form>
        <div className="flex justify-center text-sm gap-1">
          Do you have an account?
          <Link className=" hover:underline" href="./user">
            login here
          </Link>
        </div>
      </div>
    </div>
  );
}
