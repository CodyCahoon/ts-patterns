import { Primitive } from './../../types/primitive';

export function symmetricDifference<T extends Primitive>(
  a: Set<T>,
  b: Set<T>
): Set<T> {
  return union(difference(a, b), difference(b, a));
}

export function difference<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((val) => !b.has(val)));
}

export function intersection<T extends Primitive>(
  a: Set<T>,
  b: Set<T>
): Set<T> {
  return new Set<T>([...a].filter((aVal) => b.has(aVal)));
}

export function union<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set<T>([...a, ...b]);
}

export function subset<T extends Primitive>(a: Set<T>, b: Set<T>): boolean {
  return intersection(a, b).size === b.size;
}
