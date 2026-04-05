import Link from 'next/link';
import AppSection from '@/app/components/ui/AppSection';
import AppContainer from '@/app/components/ui/AppContainer';
import FinalCTA from '@/app/components/ui/FinalCTA';

export const metadata = {
  title: 'Bidding Services | We Apply Jobs For You',
  description:
    'We apply to jobs on LinkedIn, Indeed, Glassdoor and more to help you get interviews faster.',
  alternates: {
    canonical: 'https://bidingservices.com',
  },
};

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <AppSection>
        <AppContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get More Job Interviews Without Applying Yourself
            </h1>

            <p className="text-gray-400 mb-6">
              We apply to jobs daily across multiple platforms so you can focus on interviews.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
                Start Now
              </Link>

              <Link href="/services" className="border border-[#333] px-6 py-3 rounded-lg">
                View Services
              </Link>
            </div>
          </div>
        </AppContainer>
      </AppSection>

      {/* TRUST BAR */}
      <AppSection>
        <AppContainer>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {['LinkedIn', 'Indeed', 'Glassdoor', 'Dice', 'JobRight.ai'].map((item) => (
              <span key={item} className="border px-3 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        </AppContainer>
      </AppSection>

      {/* STATS */}
      <AppSection>
        <AppContainer>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-500">500+</h3>
              <p className="text-gray-400 text-sm">Applications Sent</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-500">100+</h3>
              <p className="text-gray-400 text-sm">Interviews Generated</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-500">10+</h3>
              <p className="text-gray-400 text-sm">Platforms Covered</p>
            </div>
          </div>
        </AppContainer>
      </AppSection>

      {/* SERVICES */}
      <AppSection>
        <AppContainer>
          <h2 className="text-2xl text-center mb-10">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Job Applications',
                desc: 'We apply daily with a proven strategy across platforms.',
              },
              {
                title: 'Resume Optimization',
                desc: 'We improve your resume to increase response rates.',
              },
              {
                title: 'Consultation',
                desc: 'We guide you to land better job opportunities.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#222] hover:border-purple-500 transition"
              >
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </AppContainer>
      </AppSection>

      {/* WHY CHOOSE US */}
      <AppSection>
        <AppContainer>
          <h2 className="text-2xl text-center mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-6 text-white">
            {[
              'Daily consistent applications',
              'Multi-platform coverage',
              'Human-driven strategy',
              'Better response rate',
            ].map((item) => (
              <div
                key={item}
                className="p-5 border border-[#222] rounded-lg bg-[#111]"
              >
                {item}
              </div>
            ))}
          </div>
        </AppContainer>
      </AppSection>

      {/* TESTIMONIALS */}
      <AppSection>
        <AppContainer>
          <h2 className="text-2xl text-center mb-10">What Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Got interviews within a week!',
              'Saved me hours daily.',
              'Highly professional service.',
            ].map((text, i) => (
              <div
                key={i}
                className="p-6 bg-[#111] border border-[#222] rounded-xl"
              >
                <p className="text-sm text-white">{text}</p>
              </div>
            ))}
          </div>
        </AppContainer>
      </AppSection>

      {/* FINAL CTA */}
      <FinalCTA />

    </main>
  );
}