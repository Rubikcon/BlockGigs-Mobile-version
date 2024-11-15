import { ValueTransformer } from "typeorm";

export const StringListTransformer: ValueTransformer = {
  to: (value: string[]): string => value.join(","), // Convert array to string
  from: (value: string): string[] => value.split(","), // Convert string to array
};
