import Navbar from '../../components/Navbar';
import FormSettings from './components/FormSettings';

export default function Settings() {
	return (
		<div className='h-screen w-full flex flex-col'>
			<Navbar />
			<div className='flex flex-row mx-auto h-full w-full max-w-5xl sm:px-6 lg:px-8'>
				<div className='max-w-xs max-h-full bg-slate-400 p-3'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore obcaecati amet
					architecto, ea numquam cum explicabo asperiores laborum quas qui quis dolor voluptatum
					pariatur consequuntur, eius aspernatur consectetur molestias libero! Maxime ipsam tenetur
					adipisci sunt natus inventore ullam nobis odio id quis. Vel incidunt adipisci libero, qui
					omnis hic id dicta pariatur iusto facilis, doloribus et similique enim maxime fugit!
					Dolores nesciunt unde nisi minima deleniti voluptatum vero facere voluptatem at, eum quod
					velit perferendis consectetur, saepe beatae impedit, molestiae obcaecati aspernatur
					deserunt ad necessitatibus pariatur consequuntur repellendus. Explicabo, quidem. Sapiente
					amet deserunt modi se
				</div>
				<div className='w-full flex justify-center items-center mx-auto'>
					<FormSettings />
				</div>
			</div>
		</div>
	);
}
