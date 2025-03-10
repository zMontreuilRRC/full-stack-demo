# Projects with TypeScript
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## `tsconfig.json`
- The `tsconfig.json` file is located in the root directory of a TypeScript project.
- It specifies project root files and compiler options

There can be multiple files: `tsconfig.json` for project-wide configuration, `tsconfig.node.json` for Node.js-specific components, and `tsconfig.app.json` for Application/frontend code.

## Modules
Types can be exported and imported with ES syntax:
```TypeScript
export type Cat = { breed: string, yearOfBirth: number}

export interface Dog {
    breeds: string[],
    yearOfBirth: number
}

// . . . in another file (note import type):
import type {Cat, Dog} from "./animal.

## Project Reference
In `tsconfig.json` the `references` prop can specify distinct projects to reference:
```json
//...
"references": [
    {"path": "../src"}
]
// ...
```
These can point to directories containing a `tsconfig.json` file (or the file).
This allows multiple projects to be compiled in concert. Consider reading further in monorepo.

Note that full configuration can be shown at any time with `npx tsc --showConfig`