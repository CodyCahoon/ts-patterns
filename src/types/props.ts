export type Props<T extends object, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

interface Example {
  str: string;
  num: number;
  boo: boolean;
}

type StringProps = Props<Example, string>; // 'str'
type NumberProps = Props<Example, number>; // 'num'
type BooleanProps = Props<Example, boolean>; // 'boo'
