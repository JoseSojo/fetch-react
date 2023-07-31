import {useState} from 'react';

export default function UserFollow({username,name, imgUrl, followBoolean}) {

	const [isFollow, setStateFollow] = useState( followBoolean );
	const text = isFollow ? 'Siguiendo' : 'Seguir';
	const btnClass = isFollow
		? 'text-gray-100 bg-emerald-500 border-emerald-500 hover:border-emerald-700 hover:bg-emerald-700'
		: 'border-gray-500 text-gray-500 hover:bg-emerald-700 hover:border-emerald-700 hover:text-gray-100'

	const handlerClick = (e) => {
		setStateFollow(!isFollow);
		return;
	}

	console.log(isFollow);


	return (
		<div className='flex justify-between gap-x-6 py-3 bg-gray-100 rounded w-64'>
			<div className='flex gap-x-4'>
				<img src={imgUrl}  className='h-10 w-10 flex-none rounded-full shadow-lg bg-gray-50 object-cover'/>
				<div className='min-w-0 flex-auto'>
					<p className='text-[13px] font-semibold leading-6 text-gray-700'>
							{name}
					</p>
					<p className='mt-1 truncate text-xs leading-5 text-gray-500 font-extrabold'>
						{username}
					</p>
				</div>
			</div>	
			<div className='flex items-center'>
				<button 
					onClick={handlerClick}
					className={`py-1 px-2 text-[13px] m-auto text-center rounded-full bg-transparent border font-extrabold outline-none ${btnClass}`}>
					<span className='block'>{text}</span>
					<span className='hidden'>Dejar de Seguir</span>
				</button>
			</div>		
		</div>
	);
}