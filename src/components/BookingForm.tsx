import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const services = [
  'Freedom from Anxiety',
  'Healing from Toxic Relationships',
  'Emotional Trauma Recovery',
  'Rooted Confidence',
  'Inner Child Awakening',
  'Mindful Living',
  'Embrace Change',
];

export const BookingForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert('Thank you for your booking request. We will confirm your appointment shortly!');
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className={`form-input ${errors.fullName ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
            placeholder="Your full name"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && (
            <p className="mt-1 text-error-500 text-sm">{errors.fullName.message}</p>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`form-input ${errors.phone ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
            placeholder="Your phone number"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && (
            <p className="mt-1 text-error-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="form-label">
            Service
          </label>
          <select
            id="service"
            className={`form-input ${errors.service ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-error-500 text-sm">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className="form-label">
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            min={today}
            className={`form-input ${errors.date ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && (
            <p className="mt-1 text-error-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="form-label">
            Preferred Time
          </label>
          <select
            id="time"
            className={`form-input ${errors.time ? 'border-error-500 focus:border-error-500 focus:ring-error-200' : ''}`}
            {...register('time', { required: 'Time is required' })}
          >
            <option value="">Select a time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
          {errors.time && (
            <p className="mt-1 text-error-500 text-sm">{errors.time.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Additional Information (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="form-input"
          placeholder="Please share any additional information that might help me prepare for our session."
          {...register('message')}
        ></textarea>
      </div>

      <div className="mt-6">
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
        </Button>
      </div>
    </form>
  );
};