import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`form-input ${errors.name ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-error-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`form-input ${errors.email ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
          placeholder="your.email@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-error-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`form-input ${errors.message ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
          placeholder="How can we help you?"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-error-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};