import React, { useState } from 'react';
import { Trophy, Users, User, TrendingUp } from 'lucide-react';

const Ranking = () => {
    const [activeTab, setActiveTab] = useState('alliance'); // 'alliance' or 'individual'

    // Dummy Data for Alliances
    const alliances = [
        { rank: 1, name: "東京マネジメント部", points: 1250, change: "up" },
        { rank: 2, name: "大阪支社", points: 1180, change: "up" },
        { rank: 3, name: "企画開発部東京", points: 980, change: "down" },
        { rank: 4, name: "東京制作部", points: 940, change: "same" },
        { rank: 5, name: "名古屋支社", points: 880, change: "down" },
        { rank: 6, name: "企画開発部沖縄", points: 760, change: "up" },
        { rank: 7, name: "経理部", points: 720, change: "same" },
    ];

    // Dummy Data for Individuals
    const individuals = [
        { rank: 1, name: "佐藤 健太", alliance: "大阪支社", points: 154, job: "Sales" },
        { rank: 2, name: "田中 美咲", alliance: "東京マネジメント", points: 142, job: "Manager" },
        { rank: 3, name: "鈴木 一郎", alliance: "東京制作部", points: 138, job: "Creator" },
        { rank: 4, name: "山田 花子", alliance: "企画開発部東京", points: 120, job: "Planner" },
        { rank: 5, name: "高橋 誠", alliance: "名古屋支社", points: 115, job: "Sales" },
    ];

    return (
        <div className="w-full max-w-[1600px] mx-auto py-12 px-6">
            <h1 className="text-4xl text-center mb-12">WAR REPORT / <span className="text-fire">RANKING</span></h1>

            {/* Tabs */}
            <div className="flex justify-center mb-8 md:mb-12 px-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto">
                    <button
                        onClick={() => setActiveTab('alliance')}
                        className={`group relative px-6 py-4 md:px-10 md:py-4 transition-all duration-300 w-full md:w-auto overflow-hidden tactical-corner ${activeTab === 'alliance' ? 'bg-ice text-black' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <div className={`absolute inset-0 bg-ice/20 blur-xl transition-opacity duration-300 ${activeTab === 'alliance' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
                        <div className="relative flex items-center justify-center gap-3 font-display tracking-wider text-sm md:text-lg">
                            <Users size={20} className={activeTab === 'alliance' ? 'animate-pulse' : ''} />
                            <span>最強の同盟</span>
                        </div>
                        {activeTab === 'alliance' && <div className="absolute bottom-0 left-0 w-full h-1 bg-ice shadow-[0_0_15px_rgba(0,212,255,0.8)]"></div>}
                    </button>

                    <button
                        onClick={() => setActiveTab('individual')}
                        className={`group relative px-6 py-4 md:px-10 md:py-4 transition-all duration-300 w-full md:w-auto overflow-hidden tactical-corner ${activeTab === 'individual' ? 'bg-fire text-white' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <div className={`absolute inset-0 bg-fire/20 blur-xl transition-opacity duration-300 ${activeTab === 'individual' ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
                        <div className="relative flex items-center justify-center gap-3 font-display tracking-wider text-sm md:text-lg">
                            <User size={20} className={activeTab === 'individual' ? 'animate-pulse' : ''} />
                            <span>総督表彰</span>
                        </div>
                        {activeTab === 'individual' && <div className="absolute bottom-0 left-0 w-full h-1 bg-fire shadow-[0_0_15px_rgba(255,87,34,0.8)]"></div>}
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto">
                {activeTab === 'alliance' ? (
                    <div className="space-y-4">
                        {alliances.map((team) => (
                            <div key={team.name} className={`flex items-center p-6 glass-panel depth-card group hover:border-ice/50 transition-all tactical-border ${team.rank <= 3 ? 'bg-gradient-to-r from-transparent via-ice/5 to-transparent' : ''}`}>
                                <div className={`text-4xl font-display font-bold w-20 text-center ${team.rank === 1 ? 'text-gold drop-shadow-[0_0_20px_rgba(255,162,38,0.8)]' :
                                        team.rank === 2 ? 'text-ice drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]' :
                                            team.rank === 3 ? 'text-amber drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]' :
                                                'text-gray-600'
                                    }`}>
                                    {team.rank}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold group-hover:text-ice transition-colors">{team.name}</h3>
                                    <div className="h-2 bg-gray-800 rounded-full mt-2 overflow-hidden border border-ice/20 depth-inset">
                                        <div className="h-full bg-gradient-to-r from-blue-900 via-blue-600 to-ice shadow-[0_0_10px_rgba(0,212,255,0.4)]" style={{ width: `${(team.points / 1500) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className="text-right pl-6">
                                    <div className="text-3xl font-display text-white">{team.points} <span className="text-sm text-gray-400 font-sans">pt</span></div>
                                    <div className="text-xs text-gray-500 mt-1 flex justify-end items-center gap-1">
                                        前日比 {team.change === 'up' ? <TrendingUp size={12} className="text-green-400" /> : (team.change === 'down' ? <TrendingUp size={12} className="text-red-500 rotate-180" /> : '-')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {individuals.map((person) => (
                            <div key={person.name} className={`flex items-center p-6 glass-panel depth-card group hover:border-fire/50 transition-all tactical-border ${person.rank <= 3 ? 'bg-gradient-to-r from-transparent via-fire/5 to-transparent' : ''}`}>
                                <div className={`text-4xl font-display font-bold w-20 text-center ${person.rank === 1 ? 'text-gold drop-shadow-[0_0_20px_rgba(255,162,38,0.8)]' :
                                        person.rank === 2 ? 'text-fire drop-shadow-[0_0_15px_rgba(255,87,34,0.6)]' :
                                            person.rank === 3 ? 'text-amber drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]' :
                                                'text-gray-600'
                                    }`}>
                                    {person.rank}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mr-6 border border-white/10 depth-inset">
                                    <User className="text-gray-400" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold group-hover:text-fire transition-colors">{person.name}</h3>
                                    <p className="text-sm text-gray-400">{person.alliance} / <span className="text-ice">{person.job}</span></p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-display text-white">{person.points} <span className="text-sm text-gray-400 font-sans">pt</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ranking;
