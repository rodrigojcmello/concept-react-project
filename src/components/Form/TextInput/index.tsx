import React, { SyntheticEvent, useCallback } from 'react';
import TextInputProps from './types';

function TextInput({ onChange, value }: TextInputProps): JSX.Element {
  const handleChange = useCallback(
    (event: SyntheticEvent<HTMLInputElement>): void => {
      onChange(event.currentTarget.value);
    },
    []
  );
  return <input onChange={handleChange} type="text" value={value} />;
}

export default TextInput;
