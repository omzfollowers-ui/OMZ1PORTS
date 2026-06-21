/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PlayCircle, Mic, Newspaper, Trophy, ArrowRight, Menu, Activity, Video } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Activity className="w-8 h-8 text-red-600" />
              <span className="font-display font-black text-2xl tracking-tighter uppercase">
                OMZ<span className="text-red-600">Sports</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
              <a href="#news" className="hover:text-red-500 transition-colors">NEWS</a>
              <a href="#shows" className="hover:text-red-500 transition-colors">ORIGINALS</a>
              <a href="#podcasts" className="hover:text-red-500 transition-colors">PODCASTS</a>
              <a href="#live" className="hover:text-red-500 transition-colors">LIVE</a>
              <button type="button" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95">
                SUBSCRIBE
              </button>
            </div>

            <button 
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <a href="#news" onClick={() => setIsMenuOpen(false)} className="block text-white font-medium hover:text-red-500 transition-colors">NEWS</a>
              <a href="#shows" onClick={() => setIsMenuOpen(false)} className="block text-white font-medium hover:text-red-500 transition-colors">ORIGINALS</a>
              <a href="#podcasts" onClick={() => setIsMenuOpen(false)} className="block text-white font-medium hover:text-red-500 transition-colors">PODCASTS</a>
              <a href="#live" onClick={() => setIsMenuOpen(false)} className="block text-white font-medium hover:text-red-500 transition-colors">LIVE</a>
              <button type="button" className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-bold transition-all">SUBSCRIBE</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-3/4 h-full bg-red-600/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-bold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              LIVE: WEEKLY BIG GAME
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[1.1] tracking-tight mb-6 uppercase">
              OMZ Sports:
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                The Pulse of the Game
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              OMZ Sports delivers the best of sports media with original series, premium podcasts, and live coverage.
              Bold opinions, cinematic storytelling, and insider access for fans who want more than the box score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] active:translate-y-0">
                <PlayCircle className="w-5 h-5" />
                Watch The Latest Episode
              </button>
              <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-slate-700 hover:border-slate-600">
                Explore the Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-slate-900" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-4">Latest News</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Trade Deadline Insights',
                summary: 'Expert breakdowns of the biggest moves and how they reshape the season.',
              },
              {
                title: 'Injury Updates',
                summary: 'Fast, accurate coverage of roster changes and recovery timelines.',
              },
              {
                title: 'Front Office Rumors',
                summary: 'Behind-the-scenes commentary on the latest team strategies and signings.',
              },
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-slate-950 border border-slate-800 p-8 hover:border-red-600/50 transition-colors"
              >
                <h3 className="font-display font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900" id="shows">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-4">Original Media</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Newspaper, title: "Breaking News", desc: "Real-time updates, trades, and injury reports as they happen." },
              { icon: Mic, title: "OMZ Podcasts", desc: "Deep dive analysis with athletes, coaches, and sports icons." },
              { icon: Video, title: "Video Originals", desc: "Cinematic documentaries and behind-the-scenes access." },
              { icon: Trophy, title: "Live Analytics", desc: "Next-gen stats and predictive breakdowns for the ultimate fan." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-red-600/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:text-red-500 transition-all">
                  <feature.icon className="w-7 h-7 text-slate-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-24 bg-slate-900" id="podcasts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-4">Podcasts</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'The Locker Room',
                desc: 'Weekly debates with insiders, athletes, and culture makers.',
              },
              {
                title: 'Beyond the Field',
                desc: 'Personal stories that connect sports, society, and entertainment.',
              },
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-slate-950 border border-slate-800 p-8 hover:border-red-600/50 transition-colors"
              >
                <h3 className="font-display font-bold text-3xl mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                <button type="button" className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all">Listen Now</button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute -right-1/4 top-0 w-1/2 h-full bg-red-600/10 blur-[120px] skew-x-12 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-6 leading-tight">
                Not Just Stats.
                <br />
                <span className="text-red-500">The Whole Story.</span>
              </h2>
              <p className="text-slate-400 text-lg sm:text-xl mb-8 leading-relaxed">
                At OMZ Sports, we blend raw athletic competition with prime-time entertainment. We go beyond the box score to bring you the culture, the drama, and the human elements that make sports the greatest reality show on earth.
              </p>
              <ul className="space-y-4 mb-10">
                {['Exclusive Player Interviews', 'Award-Winning Docuseries', 'Unbiased Opinion & Debate'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-red-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="font-bold border-b-2 border-red-600 pb-1 text-white hover:text-red-500 transition-colors flex items-center gap-2 group">
                Join The Community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/50 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-transform duration-500 group-hover:scale-110">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_50px_-10px_rgba(220,38,38,0.8)] backdrop-blur-md bg-opacity-90">
                  <PlayCircle className="w-10 h-10 text-white ml-1" />
                </div>
                <span className="font-display font-bold tracking-widest text-sm uppercase">Play Showreel</span>
              </div>
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Coverage Section */}
      <section className="py-24 bg-slate-950" id="live">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-4">Live Coverage</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Game Day Streams',
                detail: 'Real-time analysis and behind-the-scenes access for every major event.',
              },
              {
                title: 'Interactive Polls',
                detail: 'Vote on plays, picks, and predictions as the action unfolds.',
              },
              {
                title: 'Instant Alerts',
                detail: 'Stay connected with live breaking news and score updates.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8"
              >
                <h3 className="font-display font-bold text-2xl mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-6 h-6 text-red-600" />
                <span className="font-display font-black text-xl tracking-tighter uppercase">
                  OMZ<span className="text-red-600">Sports</span>
                </span>
              </div>
              <p className="text-slate-500 mb-6">
                Redefining sports entertainment media for the next generation of fans.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-4">Network</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Original Series</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Podcasts</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Articles & News</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Live Coverage</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Stay Updated</h4>
              <div className="flex bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group focus-within:border-red-500 transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none outline-none text-white px-4 py-3 w-full"
                />
                <button className="bg-slate-800 hover:bg-red-600 px-4 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} OMZ Sports Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

