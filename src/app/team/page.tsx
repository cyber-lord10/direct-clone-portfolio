'use client';

import { Layout } from '@/components/layout/Layout';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Users } from 'lucide-react';

const collaborators = [
	{
		name: 'Tech Community Cameroon',
		role: 'Developer Network',
		description:
			'Active member of the Cameroon tech ecosystem, collaborating on open-source projects.',
		links: {
			website: '#',
		},
	},
	{
		name: 'Open Source Contributors',
		role: 'Global Community',
		description:
			'Grateful to all open-source maintainers whose tools power my projects.',
		links: {
			github: 'https://github.com',
		},
	},
	{
		name: 'Freelance Partners',
		role: 'Project Collaborators',
		description:
			'Working with talented designers, developers, and project managers worldwide.',
		links: {
			linkedin: 'https://linkedin.com',
		},
	},
];

const credits = [
	{ name: 'React', description: 'UI Framework', href: 'https://react.dev' },
	{
		name: 'Tailwind CSS',
		description: 'Styling',
		href: 'https://tailwindcss.com',
	},
	{
		name: 'Framer Motion',
		description: 'Animations',
		href: 'https://framer.com/motion',
	},
	{
		name: 'Lucide Icons',
		description: 'Iconography',
		href: 'https://lucide.dev',
	},
	{
		name: 'Shadcn/ui',
		description: 'Components',
		href: 'https://ui.shadcn.com',
	},
];

const TeamPage = () => {
	return (
		<Layout>
			<article className='pt-32 pb-16'>
				<div className='container px-4'>
					<FadeIn>
						<header className='text-center mb-16'>
							<p className='text-primary font-mono text-sm mb-4 tracking-widest uppercase'>
								{'// Collaborations'}
							</p>
							<h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
								<span className='text-glow text-primary'>Team</span> &
								References
							</h1>
							<p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
								Great projects are built through collaboration. Here are the
								amazing people and technologies that make my work possible.
							</p>
						</header>
					</FadeIn>

					{/* Collaborators */}
					<section className='mb-20' aria-labelledby='collaborators-heading'>
						<FadeIn>
							<div className='flex items-center gap-3 mb-8'>
								<Users className='text-primary' size={24} />
								<h2
									id='collaborators-heading'
									className='font-display text-2xl font-bold'
								>
									Collaborators & Partners
								</h2>
							</div>
						</FadeIn>

						<div className='grid md:grid-cols-3 gap-6'>
							{collaborators.map((collab, index) => (
								<FadeIn key={collab.name} delay={0.1 * index}>
									<motion.div
										className='p-6 bg-card border border-border rounded-lg hover:border-primary transition-all h-full'
										whileHover={{ y: -4 }}
									>
										<h3 className='font-display text-lg font-bold text-foreground mb-2'>
											{collab.name}
										</h3>
										<p className='text-primary text-sm mb-4'>{collab.role}</p>
										<p className='text-muted-foreground text-sm mb-6'>
											{collab.description}
										</p>

										<div className='flex gap-3'>
											{collab.links.website && (
												<a
													href={collab.links.website}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 border border-border rounded hover:border-primary hover:text-primary transition-colors'
													aria-label={`Visit ${collab.name} website`}
												>
													<ExternalLink size={16} />
												</a>
											)}
											{collab.links.github && (
												<a
													href={collab.links.github}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 border border-border rounded hover:border-primary hover:text-primary transition-colors'
													aria-label={`Visit ${collab.name} GitHub`}
												>
													<Github size={16} />
												</a>
											)}
											{collab.links.linkedin && (
												<a
													href={collab.links.linkedin}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 border border-border rounded hover:border-primary hover:text-primary transition-colors'
													aria-label={`Visit ${collab.name} LinkedIn`}
												>
													<Linkedin size={16} />
												</a>
											)}
										</div>
									</motion.div>
								</FadeIn>
							))}
						</div>
					</section>

					{/* Technology Credits */}
					<section aria-labelledby='credits-heading'>
						<FadeIn>
							<h2
								id='credits-heading'
								className='font-display text-2xl font-bold mb-8'
							>
								Technology Credits
							</h2>
						</FadeIn>

						<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
							{credits.map((credit, index) => (
								<FadeIn key={credit.name} delay={0.05 * index}>
									<motion.a
										href={credit.href}
										target='_blank'
										rel='noopener noreferrer'
										className='group p-4 bg-card border border-border rounded-lg text-center hover:border-primary transition-all'
										whileHover={{ scale: 1.02 }}
									>
										<p className='font-display font-semibold text-foreground group-hover:text-primary transition-colors'>
											{credit.name}
										</p>
										<p className='text-xs text-muted-foreground mt-1'>
											{credit.description}
										</p>
									</motion.a>
								</FadeIn>
							))}
						</div>
					</section>
				</div>
			</article>
		</Layout>
	);
};

export default TeamPage;
