import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-green-800 text-white py-4 shadow-md">
            <div id="header-title" className="text-2x1 font-bold">Samuel Dias Costa</div>
            <nav className="max-w-4x1 mx-auto ppx-4 flex justify-between items-center"></nav>
            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>

            </ul>
        </header>
    );
}