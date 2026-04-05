'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // ✅ important fix
      },
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
    } else {
      setStatus('Something went wrong.');
    }

    setTimeout(() => setStatus(''), 6000);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-5 bg-[#111] border border-[#222] p-8 rounded-2xl"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 text-white"
      />

      <select
        name="service"
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 text-white"
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
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-medium text-white"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {status && (
        <p className="text-center text-sm text-green-400">
          {status}
        </p>
      )}

    </form>
  );
}