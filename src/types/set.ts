import { Primitive } from './primitive';

export function difference<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  const intersect = intersection(a, b);
  return [...a.values(), ...b.values()].reduce((diff: Set<T>, val: T) => {
    if (intersect.has(val)) {
      return diff;
    }
    return new Set([].concat([...diff], val));
  }, new Set<T>());
}

export function intersection<T extends Primitive>(
  a: Set<T>,
  b: Set<T>
): Set<T> {
  return new Set<T>(Array.from(a).filter((a) => b.has(a)));
}

export function union<T extends Primitive>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set<T>([...Array.from(a), ...Array.from(b)]);
}
