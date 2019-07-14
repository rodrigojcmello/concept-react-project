import styled from 'styled-components';

interface ButtonProps {
  name1: number;
  name2: string;
  name3: string;
}

export const Button = styled.div<ButtonProps>`
  background-color: red;
`;

export default Button;
