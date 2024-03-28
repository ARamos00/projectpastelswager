import Link from 'next/link';
import Logo from './Logo'; // Ensure correct path
import Button from './Button'; // Ensure correct path

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-black-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/game" legacyBehavior>
                                Game
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
