import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Snowflake, Users, PlayCircle, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510] z-0 pointer-events-none"></div>

                <div className="z-10 animate-fade-in-up relative max-w-[1600px] mx-auto w-full">
                    {/* Decorative ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border border-white/10 rounded-full animate-reverse-spin pointer-events-none"></div>

                    <div className="glass-panel p-8 md:p-16 relative overflow-hidden group flex flex-col items-center text-center">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ice to-transparent opacity-50"></div>

                        <h2 className="text-xl md:text-3xl tracking-[0.5em] md:tracking-[0.8em] text-ice mb-6 border-none p-0 inline-block font-display animate-ice-shimmer">
                            TSU-BOX ANNUAL QUEST 2026
                        </h2>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 font-display tracking-tighter leading-none">
                            SURVIVAL<br />GUIDE
                        </h1>

                        <p className="text-lg md:text-2xl text-fire font-bold tracking-widest uppercase mb-12 flex items-center justify-center gap-4">
                            <span className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent via-fire to-transparent"></span>
                            極寒の市場環境を生き残る戦略書
                            <span className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent via-fire to-transparent"></span>
                        </p>

                        <div className="mt-8 flex justify-center">
                            <Link
                                to="/guide"
                                className="btn btn-fire text-xl px-12 py-6 md:min-w-[300px] tactical-corner"
                            >
                                <span className="relative z-10">Mission Start</span>
                                <ArrowRight className="relative z-10" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Rules Section */}
            <section className="w-full max-w-[1400px] mx-auto px-6 py-20 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display tracking-widest text-white relative inline-block py-4">
                        THE 3 RULES OF SURVIVAL
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-ice to-transparent"></div>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-4">
                    <div className="glass-panel depth-card p-10 text-center flex flex-col items-center group tactical-border">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-ice/30 group-hover:border-ice transition-all shadow-[0_0_30px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,212,255,0.4)]">
                                <Snowflake size={48} className="text-ice animate-ice-shimmer" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-ice font-display tracking-wide">RULE 01: ICE AGE</h3>
                        <p className="text-gray-300 leading-loose text-sm md:text-base">
                            市場環境は氷河期。単独での生存は不可能。<br />
                            <span className="text-ice font-bold border-b-2 border-ice/50 pb-1">「同盟」</span>を組み、結束してこの冬を越えよ。
                        </p>
                    </div>

                    <div className="glass-panel depth-card p-10 text-center group tactical-border">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent border border-fire/30 group-hover:border-fire transition-all shadow-[0_0_30px_rgba(255,87,34,0.3)] group-hover:shadow-[0_0_50px_rgba(255,87,34,0.5)]">
                                <Flame size={48} className="text-fire" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-fire font-display tracking-wide">RULE 02: MELTING POT</h3>
                        <p className="text-gray-300 leading-loose text-sm md:text-base">
                            都市の心臓、大溶鉱炉。<br />
                            全員で<span className="text-fire font-bold border-b-2 border-fire/50 pb-1">「成果」</span>という燃料を供給し続けろ。<br />
                            火を絶やすな。
                        </p>
                    </div>

                    <div className="glass-panel depth-card p-10 text-center group tactical-border">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-transparent border border-gold/30 group-hover:border-gold transition-all shadow-[0_0_30px_rgba(255,162,38,0.3)] group-hover:shadow-[0_0_50px_rgba(255,162,38,0.5)]">
                                <Users size={48} className="text-gold" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-gold font-display tracking-wide">RULE 03: SURVIVOR</h3>
                        <p className="text-gray-300 leading-loose text-sm md:text-base">
                            君たちは選ばれし生存者。<br />
                            それぞれの<span className="text-gold font-bold border-b-2 border-gold/50 pb-1">「JOB(職能)」</span>を活かし、<br />
                            互いの背中を守り合え。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
