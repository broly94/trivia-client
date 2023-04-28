import { useContext, createContext, useState } from 'react';
import { ICategory } from '../models/interfaces';

interface IContextProps {
	categories: ICategory[];
	setCategories: (categories: ICategory[]) => void;
}

const HomeContext = createContext<IContextProps>({
	categories: {} as ICategory[],
	setCategories: () => {},
});

export const useHomeContext = (): IContextProps => {
	const context = useContext(HomeContext);

	if (!context) {
		throw new Error('El provider is not available');
	}

	return context;
};

interface IProviderProps {
	children: JSX.Element | JSX.Element[];
}

export const HomeProvider = ({ children }: IProviderProps) => {
	const [categories, setCategories] = useState<ICategory[]>([]);

	const contextValue = { categories, setCategories };

	return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
};
