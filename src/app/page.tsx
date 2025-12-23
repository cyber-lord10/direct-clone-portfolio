'use client';

import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { SocialProof } from '@/components/sections/SocialProof';

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Skills />
			<SocialProof />
		</Layout>
	);
};

export default Home;
