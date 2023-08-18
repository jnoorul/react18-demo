import { ReactNode } from "react"
import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <div className="w-56 border border-r-2 h-full">
            <nav>
                <ul>
                    <li>
                        <Link to={'/batching'}>
                            <NavText>Automatic Batching</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/concurrent'}>
                            <NavText>Concurrent Rendering</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/ssr'}>
                            <NavText>SSR With Suspense</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/server'}>
                            <NavText>Server Components</NavText>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

function NavText({ children }: { children: ReactNode }) {
    return (
        <h1 className="text-lg font-bold p-2">{children}</h1>
    )
}