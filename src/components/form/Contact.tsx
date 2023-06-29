'use client';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@/components/button/Button';
import { useUI } from '@/contexts/managed-ui';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { openModal, setModalView } = useUI();

  const onSubmit = async (data: FieldValues, e: any) => {
    setModalView('LOADING');
    openModal();
    try {
      await axios.post('/api/submit', data);
      setModalView('CONTACT_SUCCESS');
      reset();
    } catch (error) {
      setModalView('ERROR');
      console.error(error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            {...register('name')}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register('email')}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            {...register('message')}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Message"
          ></textarea>
        </div>
      </div>

      {errors.name && <p>Name is required</p>}
      {errors.email && <p>Email is required</p>}
      {errors.message && <p>Message is required</p>}

      <div>
        <Button label="Submit" type="submit" configuration="filled" stretch={true} size="medium" />
      </div>
    </form>
  );
}
