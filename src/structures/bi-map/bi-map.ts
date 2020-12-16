export class BiMap<T> extends Map<T, T> {
  constructor(entries?: readonly (readonly [T, T])[] | null) {
    super(entries);
    (entries ?? []).forEach(([key, value]) => {
      super.set(value, key);
    });
  }

  public set(key: T, value: T): this {
    this.delete(key);
    this.delete(value);

    super.set(key, value);
    super.set(value, key);
    return this;
  }

  public delete(key: T): boolean {
    if (!this.has(key)) {
      return false;
    }
    const value = this.get(key);
    return super.delete(key) && super.delete(value);
  }
}
