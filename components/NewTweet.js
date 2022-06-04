import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function NewTweet({ tweets, setTweets }) {
	const [content, setContent] = useState('')
	const { data: session, status } = useSession()
    const router = useRouter()

	if (!session || !session.user) return null

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault()

				if (!content) {
					alert('No content')
					return
				}

				const res = await fetch('/api/tweet', {
					body: JSON.stringify({ content }),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
				})

				const tweet = await res.json()

				setTweets([tweet, ...tweets])
                //router.reload(window.location.pathname)
			}}
		>
			<div className="flex">
				<div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
					<textarea
						className="border border-secondary p-4 w-full text-lg font-medium bg-transparent outline-none"
						rows={2}
						cols={50}
						placeholder="What's happening?"
						name="content"
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex">
				<div className="flex-1 mb-5">
					<button className="border border-secondary float-right px-8 py-2 mt-0 mr-2 font-bold rounded-full hover:bg-secondary hover:text-primary">
						Tweet
					</button>
				</div>
			</div>
		</form>
	)
}
