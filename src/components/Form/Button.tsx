import styled from '@emotion/styled';
import theme from '../../assets/theme';

interface ButtonProps {
  name1: string;
  name2: number;
  name3: string;
}

const Button = styled.button<ButtonProps>`
  background-color: var(--primary500);
  padding: ${theme.spacing2} ${theme.spacing6};
  border: 1px solid var(--primary600);
  border-radius: ${theme.radiusMD};
  color: var(--contrast0);
`;

export default Button;
