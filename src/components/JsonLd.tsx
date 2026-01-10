import React from 'react';

export const JsonLd = () => {
	const personData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'NZENONG KOMBOU MC BRAXTON',
		alternateName: 'CYBER-LORD',
		jobTitle: 'Fullstack Software Engineer, Architect and Project Manager',
		url: 'https://nzenongbraxton.com',
		sameAs: [
			'https://mcbraxton.link',
			'https://github.com/nzenongbraxton',
			'https://linkedin.com/in/nzenongbraxton',
			'https://gitlab.com/nzenongbraxton',
			'https://wa.me/237699596551',
			'https://t.me/nzenongbraxton',
			'https://x.com/nzenongbraxton',
			'https://instagram.com/nzenongbraxton1',
			'https://threads.com/@nzenongbraxton1',
			'https://gravatar.com/nzenongbraxton',
			'https://youtube.com/@nzenongbraxton',
			'https://www.linkedin.com/in/jack-washington-7bb0873a3', // 'https://linkedin.com/in/nzenongbraxton',
			'https://tiktok.com/@nzenongbraxton',
			'https://signal.me/#p/+237699596551',
			'https://cyberlord8.wordpress.com/',
			'https://bsky.app/profile/nzenongbraxton.com',
			'https://mastodon.social/@nzenongbraxton',
			'https://stackoverflow.com/users/21245326/nzenong-mc-braxton-cyber-lord',
			'https://www.patreon.com/user?u=95811168',
			'https://www.pinterest.com/nzenongbraxton',
			'https://www.reddit.com/user/Select-Influence-466',
			'https://www.ebay.com/usr/nzenongbraxton',
			'https://open.spotify.com/user/31f23n7xh6sxx4d3ipztrrmbd3j4',
			'https://www.strava.com/athletes/200494013',
			'https://calendly.com/nzenongbraxton',
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Buea',
			addressRegion: 'Southwest Region',
			addressCountry: 'Cameroon',
		},
		description:
			'An English-speaking Cameroonian Fullstack Software Engineer, Architect and Project Manager of 5+ years of experience (since 2020) and more proficient in Laravel - residing in Buea, attended the College of Technology - Buea (COT), tech advocate, tech tutor, mathematician, Congo enthusiasist, lover of politcs and the sole proprietor of Cyber Lord Tech Solutions LLC.',
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'College of Technology - Buea (COT)',
		},
		parent: [
			{
				'@type': 'Person',
				name: 'Kombou Paul Brice',
			},
			{
				'@type': 'Person',
				name: 'Eposi Becke',
			},
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Cyber Lord Tech Solutions LLC',
		},
	};

	const organizationData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Cyber Lord Tech Solutions LLC',
		url: 'https://nzenongbraxton.com', // Placeholder if different [cyberlord.tech]
		logo: 'https://nzenongbraxton.com/thumbnail.jpeg',
		founder: {
			'@type': 'Person',
			name: 'NZENONG KOMBOU MC BRAXTON',
			alternateName: 'CYBER-LORD',
		},
		description:
			'Software development and tech solutions provided by NZENONG KOMBOU MC BRAXTON (CYBER-LORD).',
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify([personData, organizationData]),
			}}
		/>
	);
};
