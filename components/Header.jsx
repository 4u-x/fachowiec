import Link from 'next/link';


export default function Header() {
    return (
        <div className='buttons'>
        <header>
            <nav>
                <ul className="d-flex list-unstyled">
                    <li>
                        <Link href="/">
                            <><button class="btn btn-info rounded-pill px-3" type="button">Home</button></>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/SignUp">
                            <><button class="btn btn-info rounded-pill px-3" type="button">Login</button></>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/form">
                            <><button class="btn btn-info rounded-pill px-3" type="button">Forma</button></>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/nowaForma">
                            <><button class="btn btn-info rounded-pill px-3" type="button">Mui</button></>
                        </Link>
                    </li>
                </ul>
            </nav>
           
        </header>
        </div>
    );
}

