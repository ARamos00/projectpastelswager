// app/components/navigation/Navbar/Logo.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
                <Image src="/logo.png" alt="Logo" width={150} height={45} />
        </Link>
    );
};

export default Logo;
