export default function LoadMore({ tweets, setTweets }) {
	return (
		<div className="mt-10 flex justify-center">
			<button
				className="justify-self-center border border-secondary px-8 py-2 mt-0 mr-2 font-bold rounded-full hover:bg-secondary hover:text-primary"
				onClick={async () => {
					const lastTweetId = tweets[tweets.length - 1].id
					const res = await fetch(
						`/api/tweets?take=10&cursor=${lastTweetId}`
					)
					const data = await res.json()
					setTweets([...tweets, ...data])
				}}
			>
				Load More
			</button>
		</div>
	)
}
