import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import iconPlusSrc from '@/icons/icon-plus.svg';
import { COLORS, MEDIA_QUERIES } from '@/styles/constants';
import { h4TextStyle } from '@/styles/typography';

export type ColorVariantsType = {
	[key: string]: {
		[key: string]: string;
	};
};

type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'warning';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	variant?: ButtonVariants;
	icon?: 'plus';
	className?: string;
};

const plusIconAnimation = {
	reset: {},
	hover: {
		rotate: 90,
		transition: {
			duration: 0.2,
		},
	},
};

export const Button = ({
	children,
	icon,
	onClick,
	variant = 'primary',
	className,
	type,
}: ButtonProps) => {
	return icon ? (
		<IconButton
			whileHover="hover"
			animate="rest"
			type={type}
			onClick={onClick}
			variant={variant}
			className={className}
		>
			<IconWrapper variants={plusIconAnimation}>
				<Image src={iconPlusSrc} alt="" />
			</IconWrapper>
			{children}
		</IconButton>
	) : (
		<TextButton type={type} onClick={onClick} variant={variant} className={className}>
			{children}
		</TextButton>
	);
};

const ButtonBase = styled(motion.button)<{ variant: ButtonVariants }>`
	${h4TextStyle};
	display: flex;
	align-items: center;

	height: 44px;

	border-radius: 24px;
	background-color: ${({ variant, theme }) => theme.COLORS.button[variant].bg};
	color: ${({ variant, theme }) => theme.COLORS.button[variant].color};
	line-height: 0;
	transition: background-color 200ms ease-in-out;
	&:hover {
		cursor: pointer;
		background-color: ${({ variant, theme }) => theme.COLORS.button[variant].hover};

		/* Edge case for secondary button hover color being different */
		color: ${({ variant, theme }) => theme.COLORS.button[variant].color};
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		height: 48px;
	}
`;

const TextButton = styled(ButtonBase)`
	padding: 16px 18px;
	justify-content: center;
`;

const IconButton = styled(ButtonBase)`
	padding: 6px 14px 6px 6px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		padding: 8px 15px 8px 8px;
	}
`;

const IconWrapper = styled(motion.div)`
	display: grid;
	place-content: center;

	margin-right: 8px;
	width: 32px;
	height: 32px;

	background-color: ${COLORS.white};
	border-radius: 50%;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-right: 16px;
	}
`;
