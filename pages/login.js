import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import Layout from '../components/Layout';

function LoginPage() {
  const { data: session } = useSession()

  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function submitHandler({ email, password }) {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result.error) {
        console.log('failed')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout title='Login'>
      <form
        className='mx-auto max-w-screen-md flex flex-col items-center'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className='mb-8 text-3xl font-bold text-center'>Login</h2>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            {...register('email', { required: true })}
            type='email'
           className='w-full max-w-xl rounded-md p-1.5 outline-0'
            id='email'
            placeholder='Email'
            autoFocus
          />
          {errors.email && (
            <div className='text-red-500'>Please enter email.</div>
          )}
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <input
            {...register('pasword', {
              required: true,
              minLength: {
                value: 5,
                message: 'Password must be at least 5 chars.',
              },
            })}
            type='password'
             className='w-full max-w-xl rounded-md p-1.5 outline-0'
            id='password'
            placeholder='Password'
            autoFocus
          />
          {errors.password && (
            <div className='text-red-500'>{errors.password.message}</div>
          )}
        </div>
        <div className='flex justify-between items-center mb-4 w-full max-w-xl'>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-1' /> Remember me
          </label>
          <Link href='/forgot-password' className='text-blue-600'>
            Forgot Password &rarr;
          </Link>
        </div>
        <div className='mb-4 w-full flex justify-center'>
          <button
            type='submit'
            className='w-full max-w-xl rounded-md bg-gray-700 text-white px-3 py-2'
          >
            Login
          </button>
        </div>
        <div className='text-center mb-4'>or login with</div>
        <div className='flex justify-center space-x-4 w-full max-w-xl'>
          <button
            type='button'
            className='w-full rounded-md bg-gray-700 text-white px-4 py-2'
          >
            Google
          </button>
          <button
            type='button'
            className='w-full rounded-md bg-gray-700 text-white px-4 py-2'
          >
            Facebook
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;