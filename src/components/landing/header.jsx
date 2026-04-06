"use client"

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from '../ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
            <div className="flex-1 lg:flex-none">
                <Link href="/" className="inline-block">
                    <Image
                        src="/log.png"
                        alt="Viva Logo"
                        width={120}
                        height={120}
                        className="h-12 w-auto"
                    />
                </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center gap-10">
                <Link href="#features" className="text-sm font-medium text-stone-500 hover:text-white transition-colors">
                    Features
                </Link>
                <Link href="#audience" className="text-sm font-medium text-stone-500 hover:text-white transition-colors">
                    Who it's for
                </Link>
            </div>

            <div className="flex-1 lg:flex-none flex items-center justify-end gap-3 lg:gap-4">
                <div className="hidden sm:flex items-center gap-3">
                    <Show when="signed-out">
                        <SignInButton mode='modal'>
                            <Button variant="ghost" className="text-stone-400 hover:text-white cursor-pointer px-4">Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button variant="gold" className="cursor-pointer rounded-full px-6 shadow-[0_10px_30px_rgba(251,191,36,0.15)]">Get Started</Button>
                        </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                        <UserButton afterSignOutUrl="/" />
                    </Show>
                </div>

                <div className="md:hidden relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-stone-400 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>

                    {isMenuOpen && (
                        <div className="absolute top-14 right-0 w-64 p-3 rounded-2xl bg-[#0a0a0c]/90 border border-white/10  shadow-2xl animate-in fade-in zoom-in duration-300">
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="#features"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-light text-stone-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#audience"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-light text-stone-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                >
                                    Who it's for
                                </Link>
                                <hr className="border-white/5 my-2 mx-2" />
                                <Show when="signed-out">
                                    <SignInButton mode='modal'>
                                        <button className="w-full text-left px-4 py-3 text-sm font-light text-stone-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton mode='modal'>
                                        <button className="w-full text-left px-4 py-3 text-sm font-medium text-amber-400 hover:bg-amber-400/10 rounded-xl transition-all">
                                            Get Started
                                        </button>
                                    </SignUpButton>
                                </Show>
                                <Show when="signed-in">
                                    <div className="px-4 py-3 flex items-center justify-between">
                                        <span className="text-sm font-light text-stone-500">Account</span>
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                </Show>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header