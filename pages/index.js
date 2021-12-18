import Head from 'next/head';
import Login from '../components/login';
import { useMoralis } from 'react-moralis';

export default function Home() {
	const { isAuthenticated, logout } = useMoralis();

	if (!isAuthenticated) {
		return <Login />;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 h-screen w-full">
			<Head>
				<title>Metaverse Challenge</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1>you login</h1>
				<button onClick={logout}>LogOut</button>
			</main>
		</div>
	);
}
