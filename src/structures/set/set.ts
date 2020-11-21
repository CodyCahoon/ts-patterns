import { Primitive } from './../../types/primitive';

export function difference<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  const intersect = intersection(a, b);
  return new Set([...a, ...b].filter((val) => !intersect.has(val)));
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
