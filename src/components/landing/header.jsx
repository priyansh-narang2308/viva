import Image from 'next/image'
import Link from 'next/link'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from '../ui/button';

const Header = () => {

    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
            <Link href="/">
                <Image
                    src="/log.png"
                    alt="Viva Logo"
                    width={150}
                    height={150}
                    className="h-15 w-auto"
                />
            </Link>

            {/* Todo: Redirect */}

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-stone-500 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#audience" className="text-sm font-medium text-stone-500 hover:text-white transition-colors">
                        Who it's for
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Show when="signed-out">
                        <SignInButton mode='modal'>
                            <Button variant="outline" className={"cursor-pointer"}>Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button variant="gold" className={"cursor-pointer"}>Get Started</Button>
                        </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                        <UserButton />
                    </Show>
                </div>
            </div>

        </nav>
    )
}

export default Header