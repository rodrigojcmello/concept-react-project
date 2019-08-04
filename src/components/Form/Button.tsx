import styled from '@emotion/styled';

interface ButtonProps {
  name1: string;
  name2: number;
  name3: string;
}

const Button = styled.div<ButtonProps>`
  background-color: red;
`;

export default Button;
