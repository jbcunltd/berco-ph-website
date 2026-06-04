import CategoryPage from "../components/layout/CategoryPage";
import { CATEGORY_CONFIG } from "../data/categoryConfig";

export default function AluminumDoorsWindows() {
  return (
    <CategoryPage
      category="aluminum-doors-windows"
      config={CATEGORY_CONFIG["aluminum-doors-windows"]}
    />
  );
}
