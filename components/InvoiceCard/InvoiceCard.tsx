import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { StatusBadge } from '../StatusBadge/StatusBadge';

import iconChevronSrc from '@/icons/icon-arrow-right.svg';
import { bodyTextStyle, h3TextStyle, h4TextStyle } from '@/styles/typography';

interface InvoiceCardProps {
	id: string;
	dueDate: string;
	clientName: string;
	total: string;
	status: 'Draft' | 'Pending' | 'Paid';
}

export const InvoiceCard: FC<InvoiceCardProps> = ({ id, dueDate, clientName, total, status }) => {
	return (
		<Link href={`/invoice/${id}`} passHref>
			<Wrapper>
				<Id className="id">
					<span>#</span>
					{id}
				</Id>
				<DueDate>{dueDate}</DueDate>
				<ClientName>{clientName}</ClientName>
				<Total>{`$` + total}</Total>
				<Status>
					<StatusBadge status={status} />
				</Status>

				<ChevronWrapper>
					<Image src={iconChevronSrc} alt="" />
				</ChevronWrapper>
			</Wrapper>
		</Link>
	);
};

const Wrapper = styled.a`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0px 0px;
	grid-template-areas:
		'id client-name'
		'due-date .'
		'total status';

	padding: 24px;

	background-color: ${(p) => p.theme.COLORS.white};
	border-radius: 8px;
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
	border: solid 1px transparent;
	transition: border 250ms ease-in-out;

	&:hover {
		border: solid 1px ${(p) => p.theme.COLORS.primary[1]};
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: flex;
		align-items: center;
		height: 72px;
	}
`;

const Id = styled.div`
	${h4TextStyle};
	grid-area: id;

	span {
		color: ${(p) => p.theme.COLORS.primary[3]};
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-basis: 87px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-basis: 103px;
	}
`;

const DueDate = styled.div`
	${bodyTextStyle};
	grid-area: total;
	padding-top: 24px;
	padding-bottom: 28px;
	color: ${(p) => p.theme.COLORS.grey[1]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		padding: 0px;
		flex-basis: 143px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-basis: 151px;
	}
`;

const Total = styled.div`
	${h3TextStyle};
	align-self: end;
	grid-area: total;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-basis: 116px;
		align-self: revert;
		text-align: end;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-basis: 142px;
	}
`;

const ClientName = styled.div`
	${bodyTextStyle};
	grid-area: client-name;
	color: ${(p) => p.theme.COLORS.grey[5]};
	text-align: end;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		white-space: nowrap;
		text-align: start;
		flex-basis: 110px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-basis: 110px;
	}
`;

const Status = styled.div`
	grid-area: status;
	justify-self: end;
	align-self: end;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: flex;
		align-self: center;
		justify-content: flex-end;
		flex-basis: 144px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-basis: 144px;
	}
`;

const ChevronWrapper = styled.div`
	display: none;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: flex;
		justify-content: flex-end;
		flex-basis: 26px;
	}
`;
