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
        <div className="container py-12">
            <h1 className="text-4xl text-center mb-12">WAR REPORT / <span className="text-magma">RANKING</span></h1>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-[#151525]/50 p-1 rounded-full flex border border-white/10 backdrop-blur-sm">
                    <button
                        onClick={() => setActiveTab('alliance')}
                        className={`px-8 py-3 rounded-full flex items-center gap-2 transition-all ${activeTab === 'alliance' ? 'bg-ice text-black shadow-[0_0_15px_rgba(160,233,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Users size={18} /> 最強の同盟
                    </button>
                    <button
                        onClick={() => setActiveTab('individual')}
                        className={`px-8 py-3 rounded-full flex items-center gap-2 transition-all ${activeTab === 'individual' ? 'bg-magma text-white shadow-[0_0_15px_rgba(255,87,51,0.4)]' : 'text-gray-400 hover:text-white'}`}
                    >
                        <User size={18} /> 総督表彰
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                {activeTab === 'alliance' ? (
                    <div className="space-y-4">
                        {alliances.map((team) => (
                            <div key={team.name} className="flex items-center p-6 glass-panel group hover:border-ice/50 transition-colors">
                                <div className={`text-4xl font-display font-bold w-20 text-center ${team.rank <= 3 ? (team.rank === 1 ? 'text-gold drop-shadow-lg' : 'text-ice') : 'text-gray-600'}`}>
                                    {team.rank}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold group-hover:text-ice transition-colors">{team.name}</h3>
                                    <div className="h-2 bg-gray-800 rounded-full mt-2 overflow-hidden border border-white/5">
                                        <div className="h-full bg-gradient-to-r from-blue-900 to-ice shadow-[0_0_10px_rgba(160,233,255,0.4)]" style={{ width: `${(team.points / 1500) * 100}%` }}></div>
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
                            <div key={person.name} className="flex items-center p-6 glass-panel group hover:border-magma/50 transition-colors">
                                <div className={`text-4xl font-display font-bold w-20 text-center ${person.rank <= 3 ? 'text-magma drop-shadow-md' : 'text-gray-600'}`}>
                                    {person.rank}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mr-6 border border-white/10">
                                    <User className="text-gray-400" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold group-hover:text-magma transition-colors">{person.name}</h3>
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
