import Link from "next/link";

export default function Nav() {

    return (
        <nav className="shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <ul className="hidden md:flex items-center gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/personajes">Personajes</Link></li>
                    <li><Link href="/temporadas">Temporadas</Link></li>
                </ul>
            </div>
        </nav>
    )
}