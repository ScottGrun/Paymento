import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';

import { FormField } from './FormField';

import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

export const ItemField = ({ idx, control, register, total, remove }) => {
	return (
		<Wrapper>
			<ItemName label="Item Name" name={`items[${idx}].name`} register={register} />
			<Quantity label="Qty" name={`items[${idx}].quantity`} register={register} />
			<Price label="Price" name={`items[${idx}].price`} register={register} />
			<TotalWrapper>
				<span>Total</span>
				<TotalPrice>1012</TotalPrice>
			</TotalWrapper>
			<DeleteButton>
				<svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
						fillRule="nonzero"
					/>
				</svg>
			</DeleteButton>
		</Wrapper>
	);
};

const Wrapper = styled.fieldset`
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	gap: 16px;
	width: 100%;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		gap: revert;
		flex-wrap: revert;
	}
`;

const ItemName = styled(FormField)`
	min-width: 309px;
	width: 100%;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		min-width: revert;
		width: 214px;
		margin-right: 16px;
	}
`;
const Quantity = styled(FormField)`
	max-width: 64px;

	input {
		padding: 0;
		padding-left: 20px;
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-right: 16px;
		width: 46px;
		input {
			text-align: center;
			padding: 0;
		}
	}
`;
const Price = styled(FormField)`
	max-width: 100px;
	margin-right: 16px;
	overflow: hidden;
`;

// Custom Total made to look like inputs
const TotalWrapper = styled.div`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	color: ${(p) => p.theme.COLORS.primary[3]};
	max-width: 60px;
	span {
		margin-bottom: 10px;
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		max-width: 45px;
	}
`;
const TotalPrice = styled.p`
	${h4TextStyle};
	display: flex;
	align-items: center;
	height: 48px;
`;

const DeleteButton = styled.button`
	height: 48px;
	align-self: flex-end;
	margin-left: auto;
	background-color: transparent;
	svg {
		fill: ${(p) => p.theme.COLORS.grey[1]};
	}

	&:hover {
		cursor: pointer;

		svg {
			fill: ${(p) => p.theme.COLORS.warning[1]};
		}
	}
`;