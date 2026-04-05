'use client';

import Container from '@/app/components/Container';
import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        service: formData.get('service'),
      }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      e.target.reset();

      // 🔥 Auto clear after 6 seconds
      setTimeout(() => {
        setStatus('');
      }, 6000);
    } else {
      setStatus('Something went wrong.');

      setTimeout(() => {
        setStatus('');
      }, 6000);
    }

    setLoading(false);
  }

  return (
    <main className="py-16">
      <Container>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Let’s Get You More Job Opportunities
          </h1>
          <p className="text-gray-600">
            Fill out the form and we’ll start applying to jobs on your behalf.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-5 border p-8 rounded-xl shadow-sm"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <select
            name="service"
            className="w-full border px-4 py-3 rounded-lg"
          >
            <option value="">Select Service</option>
            <option value="Job Application">Job Application Service</option>
            <option value="Resume Review">Resume Review</option>
            <option value="Consultation">Consultation</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your goals..."
            rows={5}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-medium"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm text-green-600">
              {status}
            </p>
          )}

        </form>

      </Container>
    </main>
  );
}