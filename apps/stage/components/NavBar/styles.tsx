/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import defaultTheme from '../theme';

export const linkStyles = (theme?: typeof defaultTheme): SerializedStyles => css`
	align-items: center;
	border-bottom: 4px solid transparent;
	box-sizing: border-box;
	color: ${theme?.colors.black};
	cursor: pointer;
	display: flex;
	flex: 0;
	font-weight: bold;
	height: 100%;
	justify-content: center;

	text-decoration: none;
	white-space: nowrap;
	width: fit-content;
	font-size: 14px;

	svg path {
		fill: ${theme?.colors.black};
	}

	&.active,
	&:hover {
		color: ${theme?.colors.primary_dark};
		background-color: ${theme?.colors.grey_1};

		svg path {
			fill: ${theme?.colors.primary_dark};
		}
	}
`;

export const newBadgeStyle = (theme?: typeof defaultTheme): SerializedStyles => css`
	background: ${theme?.colors.warning};
	color: ${theme?.colors.primary_dark};
	font-size: 10px;
	line-height: 1;
	text-transform: uppercase;
	border-radius: 0px;
	padding: 2px 4px;
	font-weight: normal;
	margin-top: -12px;
	margin-left: 4px;
`;

export const StyledLink = styled.a`
	${({ theme }: { theme?: typeof defaultTheme }) => linkStyles(theme)}
`;

export const StyledListLink = styled.a<{ theme?: typeof defaultTheme }>`
	${({ theme }) => css`
		align-items: center;
		background-color: ${theme?.colors.white};
		border: 1px solid ${theme?.colors.grey_2};
		box-sizing: border-box;
		color: ${theme?.colors.black};
		cursor: pointer;
		display: flex;
		font-size: 16px;
		height: 40px;
		outline: none;
		padding: 6px 12px;
		text-decoration: none;
		width: 100%;

		&:hover {
			background-color: ${theme?.colors.grey_1};
		}

		&:active {
			background-color: ${theme?.colors.grey_2};
			color: ${theme?.colors.accent};
			cursor: default;
		}
	`}
`;
