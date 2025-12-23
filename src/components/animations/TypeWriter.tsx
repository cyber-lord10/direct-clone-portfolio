'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
	text: string;
	className?: string;
	delay?: number;
	speed?: number;
}

export const TypeWriter = ({
	text,
	className = '',
	delay = 0,
	speed = 50,
}: TypeWriterProps) => {
	const [displayText, setDisplayText] = useState('');
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			let currentIndex = 0;
			const interval = setInterval(() => {
				if (currentIndex <= text.length) {
					setDisplayText(text.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(interval);
				}
			}, speed);

			return () => clearInterval(interval);
		}, delay);

		return () => clearTimeout(timeout);
	}, [text, delay, speed]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);

		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<span className={className}>
			{displayText}
			<span
				className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle transition-opacity ${
					showCursor ? 'opacity-100' : 'opacity-0'
				}`}
			/>
		</span>
	);
};
