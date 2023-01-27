import '../styles/styles.scss';
import 'swiper/swiper.scss';
import Layout from '../components/Layout';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TQ12M516FM" />
			<Script
				id='google-analytics'
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-TQ12M516FM', {
				page_path: window.location.pathname,
				});
			`,
				}}
			/>
			<Layout classname='ligh-theme'>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
