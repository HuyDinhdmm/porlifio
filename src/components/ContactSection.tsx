
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import ParticleNetworkBackground from "./ParticleNetworkBackground";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ありがとうございます！お返事をお待ちください。');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Hiệu ứng Particle Network nền */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.7 }}>
        <ParticleNetworkBackground />
      </div>
      {/* Đã bỏ hiệu ứng nền sóng động */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            新しいプロジェクトやコラボレーションについてお気軽にご相談ください
          </p>
          
          {/* Japanese quote */}
          <div className="mt-8 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-cyan-400/20 max-w-md mx-auto">
            <div className="text-2xl text-cyan-400 font-bold mb-2">「未来を共に創る」</div>
            <div className="text-sm text-slate-400">Let's create the future together</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">連絡先情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full border border-cyan-400/30">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-white font-medium">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full border border-blue-400/30">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">電話</p>
                    <p className="text-white font-medium">+81 xxx xxxx xxxx</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full border border-purple-400/30">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">所在地</p>
                    <p className="text-white font-medium">東京, 日本</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">対応可能時間</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">月曜日 - 金曜日:</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">土曜日:</span>
                  <span className="text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">日曜日:</span>
                  <span className="text-slate-400">お休み</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">専門分野</h4>
              <div className="space-y-2 text-sm">
                <div className="text-cyan-400">• Generative AI Development</div>
                <div className="text-blue-400">• IoT Solutions</div>
                <div className="text-purple-400">• AI/ML Consulting</div>
                <div className="text-green-400">• Japanese-English Tech Translation</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">メッセージを送る</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                  placeholder="お名前をご入力ください"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                  placeholder="メールアドレスをご入力ください"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-slate-400"
                  placeholder="お気軽にメッセージをお送りください"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={18} />
                <span>メッセージを送信</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
