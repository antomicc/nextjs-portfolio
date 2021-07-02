import Navbar from './Navbar';
import { ThemeProvider } from '../components/context/ThemeContext';
const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<Navbar />
			{children}
		</ThemeProvider>
	);
};

export default Layout;
