import React from 'react';
import NavContextProvider from './context/NavContext';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return <NavContextProvider>{children}</NavContextProvider>;
};

export default Layout;
