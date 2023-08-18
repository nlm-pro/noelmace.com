import { TemplateResult } from 'lit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = {}> = new (...args: any[]) => T;

export type litString = string | TemplateResult;
