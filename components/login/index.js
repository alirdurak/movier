"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signIn, googleAuth } from "@/services/firebase";
export default function Login() {
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
      const data = await signIn(values.email, values.password);
      data && router.push("/");
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen text-orange-light">
      <div className=" p-8   rounded-xl shadow-md w-96  bg-title-gray/10">
        <h1 className="text-2xl font-semibold mb-4 text-title-gray ">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              E-mail
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              value={formik.values.password}
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
            Login
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
        <div className="flex text-sm gap-1 justify-center">
          <h4>Do not have an Account?</h4>
          <Link className=" hover:underline" href="/user/signup">
            sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
