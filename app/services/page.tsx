import Container from '@/app/components/Container';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="py-16">
      <Container>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Apply to Jobs So You Get Interviews
          </h1>
          <p className="text-gray-600 mb-6">
            Stop wasting time applying manually. We apply to jobs on your behalf
            across multiple platforms daily.
          </p>

          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium"
          >
            Start Now
          </Link>
        </div>

        {/* PROBLEM */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Most Job Seekers Fail
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-5 border rounded-xl">
              <p>Applying randomly with no strategy</p>
            </div>
            <div className="p-5 border rounded-xl">
              <p>Low response rate from employers</p>
            </div>
            <div className="p-5 border rounded-xl">
              <p>Missing early job opportunities</p>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Our Bidding & Job Application Service
          </h2>
          <p className="text-gray-600">
            We handle your job applications professionally and consistently,
            increasing your chances of getting noticed by recruiters worldwide.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">1. Share Your Details</h3>
              <p className="text-sm text-gray-600">
                Tell us your skills, experience, and job goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. We Apply Daily</h3>
              <p className="text-sm text-gray-600">
                We apply to jobs across multiple platforms consistently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Get Interviews</h3>
              <p className="text-sm text-gray-600">
                Receive responses and focus on interviews.
              </p>
            </div>
          </div>
        </div>

        {/* PLATFORMS */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Platforms We Cover
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 border rounded-lg">LinkedIn</span>
            <span className="px-4 py-2 border rounded-lg">Indeed</span>
            <span className="px-4 py-2 border rounded-lg">Glassdoor</span>
            <span className="px-4 py-2 border rounded-lg">Dice</span>
            <span className="px-4 py-2 border rounded-lg">JobRight.ai</span>
          </div>
        </div>

        {/* OFFER */}
        <div className="mb-16 max-w-3xl mx-auto text-center p-8 border rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Get Started with a Free Trial
          </h2>
          <p className="text-gray-600 mb-6">
            Try our service risk-free. We’ll apply to your first set of jobs and
            show you real results.
          </p>

          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Get Free Trial
          </Link>
        </div>

        {/* FINAL CTA */}
        <div className="text-center bg-black text-white p-10 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Ready to land more opportunities?
          </h2>
          <p className="text-gray-300 mb-6">
            Let us handle your job applications while you focus on interviews.
          </p>

          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Contact Us Now
          </Link>
        </div>

      </Container>
    </main>
  );
}