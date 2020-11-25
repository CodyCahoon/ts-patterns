
// From TS 4.1 release
export type Getters<T extends object> = {
    readonly [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

export type Setters<T extends object> = {
    readonly [K in keyof T as `set${Capitalize<string & K>}`]: (prop: T[K]) => void
};

export type Record<T extends object> = Getters<T> & Setters<T>;

type Person = Record<{name: string; age: number}>;

const person: Person = {
    getName: () => '',
    setName: (name: string) => {},
    getAge: () => 0,
    setAge: (age: number) => {},
}