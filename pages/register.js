import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import Layout from '../components/Layout';

function RegisterPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/shopping');
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submitHandler({ name, email, password }) {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        name,
        email,
        password,
      });

      if (result.error) {
        console.error('Registration failed:', result.error);
      } else {
        router.push('/login'); // Redirect to login page after successful registration
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  }

  return (
    <Layout title="Register">
      <form
        className="mx-auto max-w-screen-md flex flex-col items-center"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className="mb-8 text-3xl font-bold text-center">Sign up</h2>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="w-full max-w-xl rounded-md p-1.5 outline-0"
            id="name"
            placeholder="Name"
            autoFocus
          />
          {errors.name && (
            <div className="text-red-500 mt-1 text-sm">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            type="email"
            className="w-full max-w-xl rounded-md p-1.5 outline-0"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-500 mt-1 text-sm">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters',
              },
            })}
            type="password"
            className="w-full max-w-xl rounded-md p-1.5 outline-0"
            id="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="text-red-500 mt-1 text-sm">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 w-full flex justify-center">
          <button
            type="submit"
            className="w-full max-w-xl rounded-md bg-gray-700 text-white px-3 py-2"
          >
            Register
          </button>
        </div>
        <div className="text-center w-full max-w-xl">
          <a
            href="/login"
            className="text-blue-600"
          >
            Already have an account? Login &rarr;
          </a>
        </div>
      </form>
    </Layout>
  );
}

export default RegisterPage;



