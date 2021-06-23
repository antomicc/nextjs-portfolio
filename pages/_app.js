import '../styles/app.scss';
import '../styles/Base/hamburgermenu.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout classname='ligh-theme'>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
