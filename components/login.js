import { useMoralis } from 'react-moralis';
import Image from 'next/image';

function Login() {
	const { authenticate, isAuthenticated, user } = useMoralis();
	return (
		<div className="flex flex-row h-screen w-full">
			<div className="w-4/12 flex flex-col justify-center items-center  z-50">
				<button className="bg-button p-5 w-full cursor-pointer animate-pulse" onClick={authenticate}>Login</button>
			</div>

			<div className="w-8/12 relative flex flex-col justify-center items-end">
				<Image src="/images/1.jpg" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}

export default Login;
