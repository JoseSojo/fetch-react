import {useState, useEffect} from 'react';
const API_URL_CAT_RANDOM = 'https://catfact.ninja/fact';
// https://cataas.com/cat/says/hello

export default function App() {
	const [catData, setCatData] = useState('');
	const [getCat, setGetCat] = useState(false);
	const [catImage, setCatImage] = useState('');
	const [keyImage, setKeyImage] = useState('');

	const handleClick = () => setGetCat(!getCat);

	useEffect(()=> {
		fetch('https://catfact.ninja/fact')
			.then(res => res.json())
			.then(cat => {
				setCatData(cat);
				const write = cat.fact.split(' ', 3).join(' ');
				setKeyImage(write);
				return;
			})
			.catch(err => console.error(err))
	}, [getCat]);

	useEffect(() => {
		fetch(`https://cataas.com/cat/says/${keyImage}?size=50&color=red&json=true`)
			.then(res => res.json())
			.then(data => setCatImage(`https://cataas.com/${data.url}`))
			.catch(err => console.error(err))
	}, [keyImage]);

	return (
		<main className='bg-gray-200 min-h-screen flex justify-center items-center flex-col'>
			<h1 className='center font-extrabold text-3xl'>
				Data Random of Cats
			</h1>
			<button
				className='text-gray-200 hover:text-gray-100 bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded'
				onClick={handleClick}
			>
				Get Cat
			</button>
			<div className='grid grid-cols-[1fr_.5fr] grid-gap-2 mx-auto mt-10'>
	      {
					catData &&
					<p className='flex justify-center items-top px-20'>{catData.fact}</p>
				}
				{
					catImage &&
					<img src={catImage} className='w-[300px] h-[300px]' alt={`Img getting of ${catImage}`} />
				}
			</div>
		</main>
  	);
}
