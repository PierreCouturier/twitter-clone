import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Tweets from 'components/Tweets'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data'

export default function Welcome({ tweets }) {
	const { data: session, status } = useSession()
	const router = useRouter()
	if (status === 'loading') {
		return null
	}
	if (session) {
		router.push('/home')
	}
	return (
		<div className="mt-10">
			<Tweets tweets={tweets.slice(0, 3)} />
			<p className="text-center p-4 border border-secondary m-4">
				<h2 className="mb-10">Join the conversation!</h2>
				<a
					className="border border-secondary px-8 py-2 mt-5 font-bold rounded-full hover:bg-secondary hover:text-primary"
					href="/api/auth/signin"
				>
					login
				</a>
			</p>
		</div>
	)
}

export async function getServerSideProps() {
	const take = 3
	let tweets = await getTweets(prisma, take)
	tweets = JSON.parse(JSON.stringify(tweets))
	return {
		props: {
			tweets,
		},
	}
}
