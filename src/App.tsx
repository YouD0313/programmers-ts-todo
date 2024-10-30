import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/**
 * 작성자: 유디
 * 작성일: 241030
 * 내용: 기능에 대한 내용
 */

function App() {
	const name1 = '리액트';

	return (
		<>
			<h1
				className='test'
				style={{
					backgroundColor: 'black',
					color: 'white',
					fontSize: '48px',
					fontWeight: 'bold',
					padding: '20px',
				}}
			>
				Hello, <h1>{name1 === '리액트' ? 'Yes' : null}!</h1>
			</h1>
			<br /> {/* 셀프클로징 */}
			<input type='text' />
		</>
	);
}

export default App;
