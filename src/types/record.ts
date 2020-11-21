
// From TS 4.1 release
export type Getters<T> = {
    readonly [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

// g -> s
export type Setters<T> = {
    readonly [K in keyof T as `set${Capitalize<string & K>}`]: (prop: T[K]) => void
};

export type Record<T> = Getters<T> & Setters<T>;

type Person = Record<{name: string; age: number}>;

const person: Person = {
    getName: () => '',
    setName: (name: string) => {},
    getAge: () => 0,
    setAge: (age: number) => {},
}