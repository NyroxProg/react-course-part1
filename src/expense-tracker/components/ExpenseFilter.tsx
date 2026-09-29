import {
  expenseCategories,
  ExpenseCategory,
} from "@/expense-tracker/categories";

interface Props {
  onSelectCategory: (category: ExpenseCategory) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value as ExpenseCategory)}
      defaultValue=""
    >
      <option value="">All Categories</option>
      {expenseCategories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
