import { z } from "zod";

export const ExpenseCategoryTypeSchema = z.union([
  z.literal("Groceries"),
  z.literal("Utilities"),
  z.literal("Entertainment"),
]);

// Zod union doesn't allow mapping from array in a non-convoluted, readable
// manner so I'm going the other way and mapping union to string array
// https://github.com/colinhacks/zod/issues/831
export const categoryStrings = [
  ...ExpenseCategoryTypeSchema._def.options.map((opt) => opt.value),
] as const;

export type ExpenseCategory = (typeof categoryStrings)[number];

export const expenseCategories: Array<ExpenseCategory> = [
  "Groceries",
  "Utilities",
  "Entertainment",
] as const;
