import Link from "next/link";

export default function Navigation({ children, className }) {
    return (
        <div className="min-h-screen">
            <header className="max-w-[95%] sm:max-w-[85%] mx-auto pt-5 flex flex-col sm:flex-row items-center justify-between">
                <div>
                    <p className="text-2xl font-bold">
                        Saúl <span className="text-blue-500 text-2xl">P</span>
                    </p>
                </div>
                <nav className="flex text-lg gap-8 items-center">
                    <ul>
                        <Link className="" href="/">
                            Inicio
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/posts">Proyectos</Link>
                    </ul>
                    <ul>
                        <Link href="/about">Sobre mí</Link>
                    </ul>
                </nav>
            </header>
            <main className={`max-w-[95%] sm:max-w-[85%] mx-auto ${className}`}>{children}</main>
        </div>
    );
}
