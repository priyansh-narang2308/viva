'use client';

import Link from 'next/link'
import Image from 'next/image'
import FireworksBackgroundDemo from '../demo-components-backgrounds-fireworks'

const Footer = () => {
    return (
        <footer className="relative w-full py-16 px-6 sm:px-16 border-t border-white/8 overflow-hidden bg-black/20 mt-auto">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <FireworksBackgroundDemo population={2} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
                    <div className="flex flex-col items-center sm:items-start gap-4">
                        <Link href="/" className="group">
                            <Image
                                src="/log.png"
                                alt="Viva Logo"
                                width={140}
                                height={44}
                                className="h-10 sm:h-12 w-auto object-contain brightness-90 transition-all group-hover:brightness-110 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-zinc-400 text-sm max-w-[250px] text-center sm:text-left leading-relaxed">
                            Empowering students and professionals with state-of-the-art AI interview coaching.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Platform</h4>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Roadmap</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Legal</h4>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Terms</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">OAuth</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Social</h4>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Twitter</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">LinkedIn</Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Discord</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 pt-12 border-t border-white/5 sm:flex-row">
                    <p className="text-zinc-500 text-xs">
                        &copy; {new Date().getFullYear()} Viva AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono uppercase tracking-tighter">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
