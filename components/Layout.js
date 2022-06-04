import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
	const { data: session, status } = useSession()
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])
	if (!mounted) return null

	return (
		<div className="flex flex-row justify-items-center min-h-screen max-h-max">
			<div className="flex flex-col w-96 pt-32 pr-8 space-y-8">
				<Link href="/home">
					<div className="self-end text-center font-bold border border-secondary rounded-full w-32 px-4 py-2 hover:bg-secondary hover:text-primary hover:cursor-pointer">
						Home
					</div>
				</Link>
				<Link href="/utils">
					<div className="self-end text-center font-bold border border-secondary rounded-full w-32 px-4 py-2 hover:bg-secondary hover:text-primary hover:cursor-pointer">
						Utils
					</div>
				</Link>
			</div>
			<div className="border-x border-secondary w-[calc(100%-48rem)]">
				{children}
			</div>
			<div className="flex flex-col w-96 pt-32 pl-8 space-y-8">
				<button
					onClick={() =>
						setTheme(theme === 'light' ? 'dark' : 'light')
					}
				>
					{theme === 'dark' && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					)}
					{theme === 'light' && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	)
}
