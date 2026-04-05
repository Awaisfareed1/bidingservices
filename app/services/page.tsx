import Container from '@/app/components/Container';
import Link from 'next/link';
import AppSection from '@/app/components/ui/AppSection';
import FinalCTA from '@/app/components/ui/FinalCTA';

export const metadata = {
  title: 'Job Application & Bidding Services',
  description:
    'We apply to jobs on your behalf across multiple platforms and help you get interviews faster.',
  alternates: {
    canonical: 'https://bidingservices.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <AppSection>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We Apply to Jobs So You Get Interviews
            </h1>
            <p className="text-gray-400 mb-6">
              Stop wasting time applying manually. We apply to jobs on your behalf
              across multiple platforms daily.
            </p>

            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition text-white"
            >
              Start Now
            </Link>
          </div>
        </Container>
      </AppSection>

      {/* PROBLEM */}
      <AppSection>
        <Container>
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Why Most Job Seekers Fail
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              'Applying randomly with no strategy',
              'Low response rate from employers',
              'Missing early job opportunities',
            ].map((item) => (
              <div
                key={item}
                className="p-6 bg-[#111] border border-[#222] rounded-xl hover:border-purple-500 transition"
              >
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </AppSection>

      {/* SOLUTION */}
      <AppSection>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Our Bidding & Job Application Service
            </h2>
            <p className="text-gray-400">
              We handle your job applications professionally and consistently,
              increasing your chances of getting noticed by recruiters worldwide.
            </p>
          </div>
        </Container>
      </AppSection>

      {/* HOW IT WORKS */}
      <AppSection>
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: '1. Share Your Details',
                desc: 'Tell us your skills, experience, and job goals.',
              },
              {
                title: '2. We Apply Daily',
                desc: 'We apply to jobs across multiple platforms consistently.',
              },
              {
                title: '3. Get Interviews',
                desc: 'Receive responses and focus on interviews.',
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </AppSection>

      {/* PLATFORMS */}
      <AppSection>
        <Container>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Platforms We Cover
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['LinkedIn', 'Indeed', 'Glassdoor', 'Dice', 'JobRight.ai'].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 border border-[#222] bg-[#111] rounded-lg hover:border-purple-500 transition text-white"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Container>
      </AppSection>

      {/* OFFER */}
      <AppSection>
        <Container>
          <div className="max-w-3xl mx-auto text-center p-10 bg-[#111] border border-[#222] rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Get Started with a Free Trial
            </h2>
            <p className="text-gray-400 mb-6">
              Try our service risk-free. We’ll apply to your first set of jobs and
              show you real results.
            </p>

            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition text-white"
            >
              Get Free Trial
            </Link>
          </div>
        </Container>
      </AppSection>

      {/* FINAL CTA */}
      <FinalCTA />

    </main>
  );
}