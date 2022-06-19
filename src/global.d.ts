declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.webp';

declare type Maybe<T> = T | null | undefined;
declare type VoidFunction<U> = (params?: U | undefined) => void;
