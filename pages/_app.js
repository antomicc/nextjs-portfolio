import '../styles/styles.scss';
import 'swiper/swiper.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout classname='ligh-theme'>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
