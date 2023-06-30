import Link from 'next/link'
import { Icons } from '@/components/Icons'
import UserAuthForm from "@/components/UserAuthForm";

const SignUp = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] border-2 border-gray-300 shadow-md rounded-xl p-10'>
            <div className='flex flex-col space-y-2 text-center'>
                <Icons.logo className='w-12 h-12 mx-auto mb-2' />
                <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
                <p className='text-sm max-w-xs mx-auto'>
                    By continuing, you are setting up a Portlink account and agree to our
                    User Agreement and Privacy Policy.
                </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
                Already have an account?{' '}
                <Link
                    href='/sign-in'
                    className='hover:text-brand text-sm underline underline-offset-4'>
                    Sign in
                </Link>
            </p>
        </div>
    )
}

export default SignUp