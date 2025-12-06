import { useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxb0qGEUtA-BdQD20RKHWOG0QWnNniAf8JqEFkNyPGvOlg1oJW52gzqmqV_jhpTb8yGKQ/exec";

  // 🔥 Validasi Input
  const validateForm = (data) => {
    if (!data.get("nama").trim()) return "Nama tidak boleh kosong.";
    if (!data.get("email").trim()) return "Email tidak boleh kosong.";
    if (!data.get("pesan").trim()) return "Pesan tidak boleh kosong.";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.get("email").trim()))
      return "Format email tidak valid.";

    return null; // sukses
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    // 🔥 Validasi sebelum submit
    const errorMsg = validateForm(formData);
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      console.log("Success!", response);
      alert("Pesan berhasil dikirim!");
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      alert("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
        {/* LEFT */}
        <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Get in touch with me</h2>
            <p className="text-slate-400 mb-10 leading-relaxed"></p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    Email
                  </div>
                  <div className="text-sm font-medium">pijar1806@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    Phone
                  </div>
                  <div className="text-sm font-medium">0895618969922</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">
                    Lokasi
                  </div>
                  <div className="text-sm font-medium">
                    Bekasi Timur, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
        </div>

        {/* RIGHT: FORM */}
        <div className="p-10">
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Nama Lengkap
              </label>
              <input
                name="nama"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Pesan
              </label>
              <textarea
                name="pesan"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Tulis pesan anda"
              ></textarea>
            </div>

            {/* BUTTON WITH LOADING */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-200 
                ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Kirim Pesan
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
