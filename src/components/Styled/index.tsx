/* eslint-disable react/jsx-props-no-spreading */

import React, { memo, MemoExoticComponent } from 'react';
import { hasKey } from '../../utils/type';

type Spacing = 0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4;
type Color =
  | 'primary100'
  | 'primary200'
  | 'primary300'
  | 'primary400'
  | 'primary500'
  | 'primary600'
  | 'primary700'
  | 'primary800'
  | 'primary900';

export interface CSSProp {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  margin?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginVertical?: Spacing;
  marginHorizontal?: Spacing;
  marginRight?: Spacing;
  marginLeft?: Spacing;
  backgroundColor?: Color;
  color?: Color;
  borderColor?: Color;
}

export interface CSS {
  css: CSSProp;
}

interface ShortName {
  [index: string]: string;
}

const shortSpacingName: ShortName = {
  padding: 'p',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  paddingRight: 'pr',
  paddingLeft: 'pl',
  marginTop: 'mt',
  marginBottom: 'mb'
};

const shortColorName: ShortName = {
  backgroundColor: 'bg',
  color: 'c',
  borderColor: 'bc'
};

const spacingValue = {
  0: 0,
  0.25: 1,
  0.5: 2,
  0.75: 3,
  1: 4,
  1.25: 5,
  1.5: 6
};

function getValue(value1: CSSProp, value2: string): string | undefined {
  let shortName;
  let value;
  if (shortSpacingName[value2]) {
    shortName = shortSpacingName[value2];
    if (hasKey(value1, value2)) {
      const x = value1[value2];
      if (x) {
        if (hasKey(spacingValue, x)) {
          value = spacingValue[x];
        }
      }
    }
  } else if (shortColorName[value2]) {
    shortName = shortColorName[value2];
    if (hasKey(value1, value2)) {
      value = value1[value2];
    }
  }
  if (shortName && value) {
    return `${shortName}-${value}`;
  }
  return undefined;
}

function Styled<T extends CSS>(
  Component: (props: Pick<T, Exclude<keyof T, 'css'>>) => JSX.Element
): MemoExoticComponent<(props: T) => JSX.Element> {
  const styled = ({ css, ...rest }: T): JSX.Element => {
    const className: string[] = [];
    if (css) {
      Object.keys(css).forEach((key): void => {
        const name = getValue(css, key);
        if (name) className.push(name);
      });
    }
    const newProps = { ...rest, className: className.join(' ') };
    return <Component {...newProps} />;
  };
  return memo(styled);
}

export default Styled;
