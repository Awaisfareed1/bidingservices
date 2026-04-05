'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      emailjs.init('Ky-7-ZgVdnt0OUYu4');

      await emailjs.sendForm(
        'service_hwjyc6t',
        'template_cvngsp8',
        formRef.current
      );

      toast.success('Message sent successfully!');
      formRef.current.reset();

    } catch (error: any) {
      console.error(error);
      toast.error('Failed to send message. Try again.');
    }

    setLoading(false);
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 bg-[#111] border border-[#222] p-8 rounded-2xl shadow-xl"
    >

      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg text-white focus:border-purple-500"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg text-white focus:border-purple-500"
      />

      <select
        name="service"
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg text-white"
      >
        <option value="">Select Service</option>
        <option value="Job Application">Job Application</option>
        <option value="Resume Review">Resume Review</option>
        <option value="Consultation">Consultation</option>
      </select>

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell us about your goals..."
        className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 rounded-lg text-white focus:border-purple-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-medium disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

    </form>
  );
}