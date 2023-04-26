import useGetCategories from '../hooks/useGetCategories';
import ListCategories from '../components/ListCategories';

export default function Categories() {
	useGetCategories();

	return (
		<div className='home-categories flex flex-col justify-center mx-auto my-0 w-full max-w-3xl h-full'>
			<h3 className='text-center py-10 mb-20 font-bold capitalize text-5xl text-gray-800 font-sans underline'>
				Diviértete, Aprende Y Comparte
			</h3>
			<ListCategories />
		</div>
	);
}
