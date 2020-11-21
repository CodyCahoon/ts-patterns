import { difference, intersection, subset, union } from './set';

describe('Set', () => {
  describe('difference', () => {
    it('should return an empty set when passing the equal sets', () => {
      const a = new Set(['a', 'b', 'c']);
      expect(difference(a, a)).toEqual(new Set());
    });

    it('should return a valid set when passing the different sets', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['b', 'c']);

      expect(difference(a, b)).toEqual(new Set('a'));
      expect(difference(b, a)).toEqual(new Set('a'));
    });
  });

  describe('intersection', () => {
    it('should return the same set when given two equal sets', () => {
      const a = new Set(['a', 'b', 'c']);
      expect(intersection(a, a)).toEqual(a);
    });

    it('should return the values in common of two sets', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['b', 'c', 'd']);

      expect(intersection(a, b)).toEqual(new Set(['b', 'c']));
      expect(intersection(b, a)).toEqual(new Set(['b', 'c']));
    });
  });

  describe('union', () => {
    it('should return two sets combined', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['b', 'c', 'd']);
      expect(union(a, b)).toEqual(new Set(['a', 'b', 'c', 'd']));
    });
  });

  describe('subset', () => {
    it('should return false when any value is not present', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['d']);
      expect(subset(a, b)).toBe(false);
    });

    it('should return true when a value is present', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['b']);
      expect(subset(a, b)).toBe(true);
    });

    it('should return false with extra values', () => {
      const a = new Set(['a', 'b', 'c']);
      const b = new Set(['b', 'd']);
      expect(subset(a, b)).toBe(false);
    });
  });
});
