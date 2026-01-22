import React from 'react';
import { CheckCircle, Zap, Shield, Star, ExternalLink } from 'lucide-react';

const Guide = () => {
    return (
        <div className="container py-12">
            <h1 className="text-4xl text-center mb-16"><span className="text-ice">SURVIVAL</span> STRATEGY</h1>

            <section className="mb-20">
                <div className="glass-panel p-8 mb-12 flex justify-center">
                    {/* GIF Embed */}
                    <img
                        src="/assets/survival-guide.gif"
                        alt="Survival Guide Animation"
                        className="max-w-full rounded-lg shadow-[0_0_20px_rgba(160,233,255,0.2)]"
                    />
                </div>

                <h2 className="text-2xl mb-8">参加手順 / MISSION FLOW</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="relative p-8 glass-panel group hover:bg-white/5 transition-all">
                        <div className="absolute -top-6 -left-4 w-16 h-16 bg-ice text-black font-display font-bold flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(160,233,255,0.5)] transform -rotate-12 group-hover:rotate-0 transition-transform">01</div>
                        <h3 className="text-2xl mt-4 mb-4 text-ice">ミッション遂行</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            いつもの業務自体がミッションだ。<br />
                            日々の任務を確実に遂行せよ。
                        </p>
                        <a
                            href="https://forms.gle/nEep6Fd3YjWJByfR8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-full justify-center text-sm"
                        >
                            <ExternalLink size={16} /> 報告フォームへ
                        </a>
                    </div>

                    <div className="relative p-8 glass-panel group hover:bg-white/5 transition-all">
                        <div className="absolute -top-6 -left-4 w-16 h-16 bg-gray-700 text-white font-display font-bold flex items-center justify-center text-3xl shadow-lg border border-gray-500 transform -rotate-12 group-hover:rotate-0 transition-transform">02</div>
                        <h3 className="text-2xl mt-4 mb-4 text-white">戦況報告</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Googleフォームで任務完了を報告せよ。<br />
                            報告なき成果はカウントされない。
                        </p>
                    </div>

                    <div className="relative p-8 glass-panel group hover:bg-white/5 transition-all">
                        <div className="absolute -top-6 -left-4 w-16 h-16 bg-gray-700 text-white font-display font-bold flex items-center justify-center text-3xl shadow-lg border border-gray-500 transform -rotate-12 group-hover:rotate-0 transition-transform">03</div>
                        <h3 className="text-2xl mt-4 mb-4 text-white">戦力反映</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            集計システムが自動で戦力を算出。<br />
                            ランキングに即時反映される。
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl mb-8">獲得戦力リスト / POINT TABLE</h2>
                <div className="overflow-x-auto glass-panel">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700/50 bg-black/20">
                                <th className="p-6 text-ice font-display tracking-wider">CATEGORY</th>
                                <th className="p-6 text-ice font-display tracking-wider">MISSION</th>
                                <th className="p-6 text-ice font-display tracking-wider text-right">POINTS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700/30">
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-6 flex items-center gap-3 font-bold text-green-400"><CheckCircle size={20} /> DAILY</td>
                                <td className="p-6 text-gray-300">日報提出 / 勤怠打刻 / 朝の挨拶</td>
                                <td className="p-6 text-right font-display text-2xl text-white">1 <span className="text-sm text-gray-500">pt</span></td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-6 flex items-center gap-3 font-bold text-yellow-400"><Zap size={20} /> LINK</td>
                                <td className="p-6 text-gray-300">感謝カードの送付 / ChatWork即レス</td>
                                <td className="p-6 text-right font-display text-2xl text-white">1 <span className="text-sm text-gray-500">pt</span></td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-6 flex items-center gap-3 font-bold text-blue-400"><Shield size={20} /> NORMAL</td>
                                <td className="p-6 text-gray-300">環境整備 / ナレッジ共有会議への参加</td>
                                <td className="p-6 text-right font-display text-2xl text-white">2 <span className="text-sm text-gray-500">pt</span></td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-6 flex items-center gap-3 font-bold text-magma"><Star size={20} /> SPECIAL</td>
                                <td className="p-6 text-white font-bold">業務改善提案 / 勉強会主催 / リーダー担当</td>
                                <td className="p-6 text-right font-display text-2xl text-magma">5~ <span className="text-sm text-gray-500">pt</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Guide;
