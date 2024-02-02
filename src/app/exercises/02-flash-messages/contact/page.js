'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Toast from '../../../../components/Toast/';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be rendered within a ToastProvider component');
  }
  const { createToast } = context;
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/exercises/02-flash-messages/');
    createToast(
      `Your message was received. We'll get back to you shortly!`,
      'success',
    );
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' required={true} />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
