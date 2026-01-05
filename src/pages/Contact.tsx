import { useState, FormEvent } from 'react';

type SubmitStatus = 'idle' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch(
        'https://n8n.opti-mations.online/webhook/1082d3ec-2e90-4146-a085-cf5b89ade1a6',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'website-contact-form',
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!res.ok) throw new Error('Webhook failed');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-transparent border border-[#c9a24d]/25 px-4 py-[7px] text-[#f5f5f5] outline-none ' +
    'focus:border-[#c9a24d] focus:ring-0';

  return (
    <section id="contact" className="bg-black">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#f5f5f5] mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-300">
          Let's talk about growing your business.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info Box */}
          <div className="relative border border-[#c9a24d]/35 rounded-xl p-8 md:p-6">
            <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-6 text-center">
              HM Marketing Designs
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Strategic digital marketing for small and medium-sized businesses.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-[#c9a24d] font-medium">Email:</span>{' '}
                hmmarketingdesigns@gmail.com
              </li>
              <li>
                <span className="text-[#c9a24d] font-medium">Location:</span> United States
              </li>
              <li>
                <span className="text-[#c9a24d] font-medium">Services:</span> SEO & Web Design
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-400">
              We typically respond as soon as possible.
            </p>
          </div>

          {/* Form Box */}
          <div className="relative border border-[#c9a24d]/35 rounded-xl p-8 md:p-6">
            <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-6 text-center">
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <p className="mb-6 text-gray-300">
                Thanks — we'll be in touch shortly.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="mb-6 text-gray-300">
                Something went wrong. Please try again.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Desktop grid only */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-0.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-0.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-0.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-0.5">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-0.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    px-12 py-3
                    text-black
                    font-semibold
                    rounded-full
                    bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600
                    border border-yellow-600
                    shadow-[0_10px_22px_rgba(0,0,0,0.45)]
                    hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500
                    disabled:opacity-50
                    transition-all duration-300
                  "
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

