import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const Declaration = () => {
    const [name, setName] = useState('');
    const [input, setInput] = useState('');
    const messagesRef = useRef([]); // Use ref instead of state to avoid re-renders
    const canvasRef = useRef(null);
    const requestRef = useRef();
    const containerRef = useRef(null);

    // Initial dummy messages
    useEffect(() => {
        const initialMessages = [
            { text: "絶対生き残る！", name: "佐藤" },
            { text: "売上目標達成", name: "鈴木" },
            { text: "チームワーク強化", name: "田中" },
            { text: "新規開拓！", name: "高橋" },
            { text: "健康第一", name: "渡辺" },
            { text: "No.1を目指す", name: "伊藤" },
            { text: "フルコミット！", name: "山本" }
        ];
        initialMessages.forEach(msg => addMessage(msg.text, msg.name));
    }, []);

    const addMessage = (text, name) => {
        const y = Math.random() * (window.innerHeight - 300) + 100; // Keep space at bottom for input
        const speed = Math.random() * 2 + 1;
        const fontSize = Math.floor(Math.random() * 20) + 20;
        const color = Math.random() > 0.8 ? '#ff5733' : (Math.random() > 0.5 ? '#a0e9ff' : '#ffffff');

        messagesRef.current.push({
            id: Date.now() + Math.random(),
            text,
            name,
            x: window.innerWidth,
            y,
            speed,
            fontSize,
            color
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || !name.trim()) return;
        addMessage(input, name);
        setInput('');
        // Name is kept for convenience
    };

    // Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const animate = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and Draw
            messagesRef.current.forEach(msg => {
                msg.x -= msg.speed;

                // Loop logic: If off screen left, reset to right
                // Reset with new random Y and Speed
                if (msg.x < -500) {
                    msg.x = window.innerWidth + Math.random() * 500;
                    msg.y = Math.random() * (window.innerHeight - 300) + 100;
                    msg.speed = Math.random() * 2 + 1;
                }

                // Draw Text
                ctx.font = `bold ${msg.fontSize}px Inter, sans-serif`;
                ctx.fillStyle = msg.color;
                ctx.shadowColor = msg.color;
                ctx.shadowBlur = 10;
                ctx.fillText(msg.text, msg.x, msg.y);

                // Draw Name (smaller, next to text)
                ctx.font = `normal ${msg.fontSize * 0.6}px Inter, sans-serif`;
                ctx.fillStyle = "rgba(255,255,255,0.7)";
                ctx.shadowBlur = 0;
                ctx.fillText(`- ${msg.name}`, msg.x + ctx.measureText(msg.text).width + 10, msg.y);
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden flex flex-col items-center pt-24">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            />

            {/* Title Area */}
            <div className="relative z-10 text-center pointer-events-none px-4">
                <h1 className="text-5xl md:text-7xl mb-4 font-display tracking-widest drop-shadow-[0_0_20px_rgba(160,233,255,0.5)]">
                    NEW YEAR'S<br /><span className="text-ice">DECLARATION</span>
                </h1>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                    今年の抱負、覚悟、あるいは「一言」を叫べ。<br />
                    言葉は光となり、この氷河を照らす道標となる。
                </p>
            </div>

            {/* Input Form - Fixed at bottom right */}
            <div className="fixed bottom-12 right-4 md:right-12 z-50 w-full max-w-2xl px-4 md:px-0">
                <form onSubmit={handleSubmit} className="glass-panel p-6 flex flex-col gap-4 shadow-2xl border border-ice/30 bg-black/80">
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="名前 (Name)"
                            className="w-full md:w-1/4 bg-[#151525] border border-gray-600 text-white p-4 rounded focus:outline-none focus:border-ice transition-colors text-base"
                            required
                        />
                        <div className="flex-grow flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="宣言を入力..."
                                className="w-full bg-[#151525] border border-gray-600 text-white p-4 rounded focus:outline-none focus:border-ice transition-colors text-lg"
                                required
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || !name.trim()}
                                className="btn btn-primary px-6 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-w-[60px]"
                            >
                                <Send size={24} />
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-center text-gray-500">※デモモード: 投稿は保存されませんが、リアルタイムで画面に流れます。</p>
                </form>
            </div>
        </div>
    );
};

export default Declaration;
