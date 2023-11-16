import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <>Home</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/Login">
                            <>Login</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/form">
                            <>Forma</>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

