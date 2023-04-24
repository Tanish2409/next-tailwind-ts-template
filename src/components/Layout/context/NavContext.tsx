import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useMemo,
	useState,
} from 'react';

const NavContext = createContext({
	showFull: false,
	isVisible: false,
	setShowFull: (_showFull: boolean) => {},
	setVisible: (_isVisible: boolean) => {},
});

const NavContextProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [showFull, setShowFull] = useState(false);
	const [isVisible, setVisible] = useState(false);

	const value = useMemo(
		() => ({ showFull, setShowFull, isVisible, setVisible }),
		[showFull, isVisible]
	);

	return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNavContext = () => useContext(NavContext);

export default NavContextProvider;
