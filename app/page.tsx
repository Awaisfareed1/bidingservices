export const metadata = {
  title: 'Bidding Services | We Apply Jobs For You & Get Interviews',
  description:
    'Professional job application and bidding services. We apply to jobs on LinkedIn, Indeed, Glassdoor, Dice and more to help you get interviews faster.',
  keywords: [
    'bidding services',
    'job application service',
    'apply jobs for me',
    'job application outsourcing',
    'remote job applications',
  ],
};
import Container from './components/Container';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get More Job Interviews Without Applying Yourself
            </h1>
            <p className="text-gray-600 mb-6">
              We apply to jobs daily on your behalf across LinkedIn, Indeed,
              Glassdoor, Dice, and more.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Start Now
              </Link>

              <Link
                href="/services"
                className="border px-6 py-3 rounded-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section className="py-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="px-4 py-2 border rounded-lg">LinkedIn</span>
            <span className="px-4 py-2 border rounded-lg">Indeed</span>
            <span className="px-4 py-2 border rounded-lg">Glassdoor</span>
            <span className="px-4 py-2 border rounded-lg">Dice</span>
            <span className="px-4 py-2 border rounded-lg">JobRight.ai</span>
          </div>
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-10">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">
                Job Applications
              </h3>
              <p className="text-sm text-gray-600">
                We apply to jobs daily on your behalf across multiple platforms.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">
                Resume Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Improve your resume to increase response rates.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">
                Consultation
              </h3>
              <p className="text-sm text-gray-600">
                Get expert advice to land better opportunities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">1. Share Details</h3>
              <p className="text-sm text-gray-600">
                Tell us your experience and goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. We Apply</h3>
              <p className="text-sm text-gray-600">
                We apply to jobs daily for you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Get Interviews</h3>
              <p className="text-sm text-gray-600">
                Start receiving responses from recruiters.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* BLOG CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <Container>
          <h2 className="text-2xl font-semibold mb-4">
            Learn Proven Job Strategies
          </h2>
          <p className="text-gray-600 mb-6">
            Read our blog to improve your job search success.
          </p>

          <Link
            href="/blog"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Visit Blog
          </Link>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-10">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 mb-4">
                “I was struggling to get responses. After using this service,
                I started getting interview calls within a week.”
              </p>
              <h4 className="font-semibold">John D.</h4>
              <p className="text-xs text-gray-500">USA</p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 mb-4">
                “They handled everything professionally. I saved so much time
                and got better opportunities.”
              </p>
              <h4 className="font-semibold">Sarah K.</h4>
              <p className="text-xs text-gray-500">UK</p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <p className="text-sm text-gray-600 mb-4">
                “Consistent job applications made a huge difference.
                Highly recommended service.”
              </p>
              <h4 className="font-semibold">Ali R.</h4>
              <p className="text-xs text-gray-500">Remote</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">

            <div>
              <h3 className="font-semibold">
                Do you apply to jobs manually?
              </h3>
              <p className="text-sm text-gray-600">
                Yes, we apply strategically and consistently to relevant jobs based on your profile.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Which platforms do you use?
              </h3>
              <p className="text-sm text-gray-600">
                We apply across LinkedIn, Indeed, Glassdoor, Dice, JobRight.ai and more.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                How quickly can I get results?
              </h3>
              <p className="text-sm text-gray-600">
                Most clients start receiving responses within the first 1–2 weeks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you provide resume optimization?
              </h3>
              <p className="text-sm text-gray-600">
                Yes, we can improve your resume to increase your chances of getting shortlisted.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-black text-white">
        <Container>
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Get More Interviews?
          </h2>
          <p className="text-gray-300 mb-6">
            Let us handle your job applications while you focus on interviews.
          </p>

          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you apply to jobs manually?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we apply strategically and consistently to relevant jobs based on your profile.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which platforms do you use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We apply across LinkedIn, Indeed, Glassdoor, Dice, JobRight.ai and more.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get results?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most clients start receiving responses within the first 1–2 weeks.',
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Biding Services',
            url: 'https://bidingservices.com',
            description:
              'We apply to jobs on your behalf across multiple platforms to help you get interviews faster.',
          }),
        }}
      />

    </main>
  );
}