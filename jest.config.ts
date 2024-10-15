import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    testEnvironment: "node",
    verbose: true,
    transform: {
        "^.+.tsx?$": ["ts-jest",{}],
      }
  };
};

