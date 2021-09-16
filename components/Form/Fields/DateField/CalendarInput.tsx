import Image from 'next/image';
import { forwardRef } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { Error } from '@/components/Form/Error';
import iconCalendarSrc from '@/icons/icon-calendar.svg';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface CalendarInputProps {
	label: string;
	style?: CSSProperties;
	value: string;
	onChange?: () => void;
	onClick?: () => void;
	error: string | undefined;
	hasError: boolean;
	name: string;
}

// Need to spread props because of how react-datepicker works with custom inputs
// eslint-disable-next-line react/display-name
export const CalendarInput = forwardRef<HTMLInputElement, CalendarInputProps>(
	({ label, style, error, hasError, name, ...props }, ref) => (
		<CustomInputWrapper style={style}>
			<InputHeader>
				<Label htmlFor={name} hasError={hasError}>
					{label}
				</Label>
				{hasError && <Error>{error}</Error>}
			</InputHeader>
			<InputWrapper>
				<CustomInput id={name} {...props} hasError={hasError} ref={ref} />
				<InputIcon>
					<Image src={iconCalendarSrc} alt="" />
				</InputIcon>
			</InputWrapper>
		</CustomInputWrapper>
	)
);

const CustomInputWrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
`;

const InputHeader = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: revert;
	}
`;

const Label = styled.label<{ hasError: boolean }>`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	margin-bottom: 10px;
	color: ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.primary[3])};
`;

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 48px;
	width: 100%;
`;

const CustomInput = styled.input<{ hasError: boolean }>`
	${h4TextStyle};
	padding-left: 20px;
	height: 100%;
	border-radius: 4px;
	width: 100%;
	border: solid 2px ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.grey[2])};

	&:hover {
		cursor: pointer;
		border: solid 2px ${(p) => p.theme.COLORS.primary[1]};
	}
`;

const InputIcon = styled.div`
	position: absolute;
	right: 16px;
`;