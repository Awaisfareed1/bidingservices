import Container from '@/app/components/Container';
import ContactForm from '../contact/ContactForm';

export const metadata = {
  title: 'Contact Us - Job Application & Bidding Services',
  description:
    'Get in touch with us to learn more about our job application and bidding services.',
  alternates: {
    canonical: 'https://bidingservices.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Let’s Get You More Job Opportunities
          </h1>

          <p className="text-gray-400">
            Fill out the form and we’ll start applying to jobs on your behalf.
          </p>
        </div>

        {/* FORM */}
        <ContactForm />

        {/* SOCIAL */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-3">
            Or connect with us directly
          </p>

          <a
            href="https://linkedin.com" // replace with real
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#222] bg-[#111] px-6 py-3 rounded-lg hover:border-purple-500 transition text-white"
          >
            LinkedIn
          </a>
        </div>

      </Container>
    </main>
  );
}