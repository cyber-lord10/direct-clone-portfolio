'use client';

import { Layout } from '@/components/layout/Layout';
import { Projects } from '@/components/sections/Projects';
import { FadeIn } from '@/components/animations/FadeIn';

const ProjectsPage = () => {
	return (
		<Layout>
			<section className='pt-32 pb-16' aria-labelledby='projects-page-heading'>
				<div className='container px-4'>
					<FadeIn>
						<header className='text-center mb-16'>
							<p className='text-primary font-mono text-sm mb-4 tracking-widest uppercase'>
								{'// My Work'}
							</p>
							<h1
								id='projects-page-heading'
								className='font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
							>
								<span className='text-glow text-primary'>Projects</span> &
								Portfolio
							</h1>
							<p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
								A showcase of digital solutions crafted with precision,
								creativity, and cutting-edge technology.
							</p>
						</header>
					</FadeIn>
				</div>
			</section>
			<Projects />
		</Layout>
	);
};

export default ProjectsPage;
