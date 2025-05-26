import React from 'react';
import SignInForm from '@/components/auth/SignInForm';

export const metadata = {
  title: 'Sign In - Next.js Prisma App',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <SignInForm />
    </div>
  );
}
