import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider attribute="class">
				<div className='bg-primary text-secondary transition-colors duration-300'>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</div>
			</ThemeProvider>
		</SessionProvider>
	)
}

export default MyApp
