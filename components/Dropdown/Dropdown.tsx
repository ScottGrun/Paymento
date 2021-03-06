import {
	ListboxInput,
	ListboxButton,
	ListboxPopover,
	ListboxList,
	ListboxInputProps,
} from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import '@reach/listbox/styles.css';
import iconChevronDownSrc from '@/icons/icon-arrow-down.svg';
import { MEDIA_QUERIES } from '@/styles/constants';
import { h4TextStyle } from '@/styles/typography';
import { PossibleStatus } from '@/types/index';

interface DropDownProps extends ListboxInputProps {
	className?: string;
	setDropdownValue: Dispatch<SetStateAction<any>>;
	filter: PossibleStatus | 'all';
}

export const Dropdown: FC<DropDownProps> = ({
	children,
	className,
	setDropdownValue,
	filter,
	defaultValue,
}) => {
	const labelId = `filter-by-status`;

	return (
		<div className={className}>
			<VisuallyHidden id={labelId}>Filter By Status</VisuallyHidden>
			<ListboxInput
				aria-labelledby={labelId}
				defaultValue={defaultValue}
				value={filter}
				onChange={(value) => setDropdownValue(value)}
			>
				<DropdownButton
					arrow={<Image id="chevron" src={iconChevronDownSrc} alt="Arrow facing up" />}
				>
					Filter&nbsp;<span id="extra-text">by status</span>
				</DropdownButton>
				<PopOver>
					<ListboxList>{children}</ListboxList>
				</PopOver>
			</ListboxInput>
		</div>
	);
};

const PopOver = styled(ListboxPopover)`
	&[data-reach-listbox-popover] {
		background-color: ${(p) => p.theme.COLORS.dropdown.bg};
		margin: 0 auto;
		margin-left: -39px;
		margin-top: 23px;
		padding: 24px;
		border-radius: 8px;
		box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
		border: none;
	}
`;

const DropdownButton = styled(ListboxButton)`
	${h4TextStyle};
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0;

	background-color: transparent;
	border: none;
	cursor: pointer;

	span {
		height: 10px;
		margin-left: 12px;
	}

	#extra-text {
		display: none;
		height: auto;
		margin: 0;
	}

	&[data-reach-listbox-button][aria-expanded='true'] {
		#chevron {
			transition: transform 200ms;
			transform: rotate(180deg);
		}
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		#extra-text {
			display: revert;
		}
	}
`;
