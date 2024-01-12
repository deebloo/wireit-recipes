# Wireit Recipes

This document is a place to write down and share different [wireit](https://github.com/google/wireit) configurations

## TypeScript

```JSON
{
  "script": {
    "tsc": "wireit"
  },
  "wireit": {
    "tsc": {
      "command": "tsc --build --pretty",
      "clean": "if-file-deleted",
      "files": [
        "src/**/*.{ts,tsx}",
        "tsconfig.json"
      ],
      "output": [
        "target/**",
        "tsconfig.tsbuildinfo"
      ]
    }
  }
}
```

## Jest

Jest has an option to generate an output file when it runs tests.
Using that file as an output for a tasks means we can have effective caching of our test command.
If an output isn't defined, but files is, we will cache things we don't intend if we pass arguments to jest.

```JSON
{
  "script": {
    "test": "wireit"
  },
  "wireit": {
    "test": {
      "command": "jest --json --outputFile jestresults.json",
      "files": [
        "src/**"
      ],
      "output": [
        "jestresults.json"
      ]
    }
  }
}
```

## Copying Files

For cross platform copy

```bash
npm i copyfiles
```

```JSON
{
  "wireit": {
    "cp:css": {
      "command": "copyfiles -u 1 \"src/**/*.css\" target",
      "clean": "if-file-deleted",
      "files": [
        "src/**/*.css"
      ],
      "output": [
        "target/**/*.css"
      ]
    }
  }
}
```
