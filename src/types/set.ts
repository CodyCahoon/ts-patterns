import { Primitive } from './primitive';

export function difference<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  const intersect = intersection(a, b);
  return [...a.values(), ...b.values()].reduce((diff: Set<T>, val: T) => {
    if (intersect.has(val)) {
      return diff;
    }
    return new Set([...diff, val]);
  }, new Set<T>());
}

export function intersection<T extends Primitive>(
  a: Set<T>,
  b: Set<T>
): Set<T> {
  return new Set<T>([...a].filter((aVal) => b.has(aVal)));
}

export function union<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set<T>([...Array.from(a), ...Array.from(b)]);
}

export function subset<T extends Primitive>(a: Set<T>, b: Set<T>): boolean {
  return intersection(a, b).size === b.size;
}
