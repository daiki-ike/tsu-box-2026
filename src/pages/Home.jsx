import React from 'react';
import { Flame, Snowflake, Users } from 'lucide-react';

const Home = () => {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510] z-0 pointer-events-none"></div>

                <div className="z-10 animate-float relative">
                    {/* Decorative ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>

                    <h2 className="text-xl md:text-2xl tracking-[0.8em] text-ice mb-6 border-none p-0 inline-block font-display drop-shadow-[0_0_10px_rgba(160,233,255,0.5)]">
                        ANNUAL QUEST 2026
                    </h2>
                    <h1 className="text-7xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] font-display tracking-tighter loading-text">
                        SURVIVAL<br />GUIDE
                    </h1>
                    <p className="text-xl md:text-3xl text-magma font-bold tracking-widest uppercase mb-12 drop-shadow-[0_0_15px_rgba(255,77,77,0.6)]">
                        ～ 極寒の市場環境を生き残る戦略書 ～
                    </p>
                </div>

                <div className="mt-8 z-10">
                    <a href="/guide" className="btn btn-primary text-xl px-12 py-5 rounded-none border-2 tracking-[0.2em] hover:scale-105 transition-transform duration-300">
                        MISSION START
                    </a>
                </div>
            </section>

            {/* 3 Rules Section */}
            <section className="container py-20 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="border-none text-4xl md:text-5xl inline-block relative after:w-full after:left-0 tracking-widest">
                        THE 3 RULES OF SURVIVAL
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-4">
                    <div className="glass-panel p-10 text-center group hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-full bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                <Snowflake size={56} className="text-ice" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-ice group-hover:text-white transition-colors">RULE 01: ICE AGE</h3>
                        <p className="text-gray-400 leading-loose">
                            市場環境は氷河期。単独での生存は不可能。<br />
                            <span className="text-ice font-bold border-b border-ice/50 pb-1">「同盟」</span>を組み、結束してこの冬を越えよ。
                        </p>
                    </div>

                    <div className="glass-panel p-10 text-center group hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-full bg-orange-500/10 border border-orange-400/20 group-hover:bg-orange-500/20 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                                <Flame size={56} className="text-magma" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-magma group-hover:text-white transition-colors">RULE 02: MELTING POT</h3>
                        <p className="text-gray-400 leading-loose">
                            都市の心臓、大溶鉱炉。<br />
                            全員で<span className="text-magma font-bold border-b border-magma/50 pb-1">「成果」</span>という燃料を供給し続けろ。<br />
                            火を絶やすな。
                        </p>
                    </div>

                    <div className="glass-panel p-10 text-center group hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex justify-center mb-8">
                            <div className="p-6 rounded-full bg-yellow-500/10 border border-yellow-400/20 group-hover:bg-yellow-500/20 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                <Users size={56} className="text-gold" />
                            </div>
                        </div>
                        <h3 className="text-2xl mb-6 text-gold group-hover:text-white transition-colors">RULE 03: SURVIVOR</h3>
                        <p className="text-gray-400 leading-loose">
                            君たちは選ばれし生存者。<br />
                            それぞれの<span className="text-gold font-bold border-b border-gold/50 pb-1">「JOB（職能）」</span>を活かし、<br />
                            互いの背中を守り合え。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
