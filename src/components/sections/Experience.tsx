'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

interface TimelineItem {
	id: number;
	year: string;
	title: string;
	company: string;
	description: string;
	type: 'work' | 'education' | 'milestone';
}

const timeline: TimelineItem[] = [
	{
		id: 1,
		year: '2024',
		title: 'Senior Fullstack Developer',
		company: 'Current Focus',
		description:
			'Building scalable web applications and mentoring junior developers. Specializing in React, Laravel, and cloud architecture.',
		type: 'work',
	},
	{
		id: 2,
		year: '2023',
		title: 'Mobile Development',
		company: 'Flutter Expertise',
		description:
			'Expanded into cross-platform mobile development, delivering high-performance applications for iOS and Android.',
		type: 'milestone',
	},
	{
		id: 3,
		year: '2022',
		title: 'Fullstack Developer',
		company: 'Tech Company',
		description:
			'Led development of multiple client projects using modern JavaScript frameworks and PHP backends.',
		type: 'work',
	},
	{
		id: 4,
		year: '2021',
		title: 'Backend Specialist',
		company: 'Laravel & PHP',
		description:
			'Deep dive into server-side development, database optimization, and API design patterns.',
		type: 'milestone',
	},
	{
		id: 5,
		year: '2020',
		title: 'Frontend Developer',
		company: 'Starting Point',
		description:
			'Began professional journey focusing on HTML, CSS, JavaScript, and responsive design principles.',
		type: 'work',
	},
];

const getIcon = (type: string) => {
	switch (type) {
		case 'work':
			return Briefcase;
		case 'education':
			return GraduationCap;
		default:
			return Code;
	}
};

export const Experience = () => {
	return (
		<section id='experience' className='py-20 relative'>
			<div className='container px-4'>
				<FadeIn>
					<div className='text-center mb-16'>
						<p className='text-primary font-mono text-sm tracking-widest uppercase mb-2'>
							{'// The Journey'}
						</p>
						<h2 className='font-display text-3xl md:text-5xl font-bold text-glow'>
							Experience Timeline
						</h2>
					</div>
				</FadeIn>

				{/* Timeline */}
				<div className='max-w-3xl mx-auto relative'>
					{/* Vertical Line */}
					<div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent' />

					{timeline.map((item, index) => {
						const Icon = getIcon(item.type);
						const isEven = index % 2 === 0;

						return (
							<FadeIn key={item.id} delay={index * 0.1}>
								<div
									className={`relative flex items-start mb-12 ${
										isEven ? 'md:flex-row-reverse' : ''
									}`}
								>
									{/* Content */}
									<div
										className={`flex-1 ${
											isEven ? 'md:pl-12' : 'md:pr-12'
										} pl-16 md:pl-0`}
									>
										<motion.div
											className={`p-6 bg-card border border-border rounded-lg ${
												isEven ? 'md:text-left' : 'md:text-right'
											} text-left`}
											whileHover={{ y: -5 }}
											transition={{ duration: 0.3 }}
										>
											<span className='inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded mb-3'>
												{item.year}
											</span>
											<h3 className='font-display text-lg font-bold text-foreground mb-1'>
												{item.title}
											</h3>
											<p className='text-primary font-mono text-sm mb-3'>
												{item.company}
											</p>
											<p className='text-muted-foreground text-sm'>
												{item.description}
											</p>
										</motion.div>
									</div>

									{/* Icon Node */}
									<motion.div
										className='absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background box-glow-sm'
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 + 0.2 }}
									/>

									{/* Hidden spacer for layout */}
									<div className='hidden md:block flex-1' />
								</div>
							</FadeIn>
						);
					})}
				</div>
			</div>
		</section>
	);
};
