/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
