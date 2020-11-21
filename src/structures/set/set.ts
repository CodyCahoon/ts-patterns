import { Primitive } from './../../types/primitive';

type P = Primitive;

export function symmetricDifference(a: Set<P>, b: Set<P>): Set<P> {
  return union(difference(a, b), difference(b, a));
}

export function difference(a: Set<P>, b: Set<P>): Set<P> {
  return new Set([...a].filter((val) => !b.has(val)));
}

export function intersection(a: Set<P>, b: Set<P>): Set<P> {
  return new Set([...a].filter((aVal) => b.has(aVal)));
}

export function union(a: Set<P>, b: Set<P>): Set<P> {
  return new Set([...a, ...b]);
}

export function subset(a: Set<P>, b: Set<P>): boolean {
  return intersection(a, b).size === b.size;
}

export function empty(a: Set<P>): boolean {
  return a.size === 0;
}
