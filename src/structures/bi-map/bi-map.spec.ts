import { BiMap } from './bi-map';

describe('BiMap', () => {
  it('should create a bidirectional map', () => {
    const map = new BiMap<string>();
    map.set('a', 'b');

    expect(map.size).toBe(2);
    expect(map.get('a')).toBe('b');
    expect(map.get('b')).toBe('a');
  });

  it('should remove the key and value when deleting a key', () => {
    const map = new BiMap<string>();

    map.set('a', 'b');
    expect(map.size).toBe(2);

    map.delete('a');
    expect(map.size).toBe(0);

    map.set('a', 'b');
    expect(map.size).toBe(2);

    map.delete('b');
    expect(map.size).toBe(0);
  });

  it('should replace the key and value when adding an existing key', () => {
    const map = new BiMap<string>();

    map.set('a', 'b');
    expect(map.size).toBe(2);

    map.set('b', 'c');
    expect(map.size).toBe(2);
    expect(map.get('b')).toBe('c');
    expect(map.get('c')).toBe('b');
  });
});
