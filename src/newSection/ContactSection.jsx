import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { StoryBlock } from '../newComponent';

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbylqMLTAYp7u1UH0fCTQFzz9vmVN7kSES-RtJsCbKFJZ15h1Vd-FwoeksPT2tNibZ5Dhg/exec';

  const validateForm = (data) => {
    if (!data.get('nama').trim()) return 'Name is required.';
    if (!data.get('email').trim()) return 'Email is required.';
    if (!data.get('pesan').trim()) return 'Message is required.';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.get('email').trim())) return 'Email format is invalid.';

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const errorMsg = validateForm(formData);

    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      alert('Message sent successfully.');
      form.reset();
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <StoryBlock
        eyebrow="LET'S CONNECT"
        title="Interested in working together or talking about practical digital tools?"
        description="I am always open to new career opportunities, sharing ideas about warehouse administration, or simply talking about how spreadsheets and simple automation can make everyday work easier to follow."
      />

      <div className="grid gap-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.28)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-semibold">Reach out</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">Whether you have a role that fits my background or just want to connect and share experiences, I would love to hear from you.</p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Email</p>
                <a href="mailto:pijar1806@gmail.com" className="text-sm text-slate-200 transition hover:text-white">
                  pijar1806@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Phone</p>
                <a href="tel:+62895618969922" className="text-sm text-slate-200 transition hover:text-white">
                  0895618969922
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="text-sm text-slate-200">Bekasi Timur, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-400">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ahmad-pijar-49a385279" target="_blank" rel="noreferrer" className="text-sm text-slate-200 transition hover:text-white hover:underline">
                  linkedin.com/in/ahmad-pijar-49a385279
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-400">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">GitHub</p>
                <a href="https://github.com/AhmadPijar" target="_blank" rel="noreferrer" className="text-sm text-slate-200 transition hover:text-white hover:underline">
                  github.com/AhmadPijar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
              <input name="nama" type="text" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input name="email" type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="name@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                name="pesan"
                rows="4"
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white"
                placeholder="Hi Ahmad, I'm reaching out to talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition ${loading ? 'cursor-not-allowed opacity-70' : 'hover:bg-slate-700'}`}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
