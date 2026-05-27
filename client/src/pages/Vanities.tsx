import CategoryPage from "../components/layout/CategoryPage";
import { CATEGORY_CONFIG } from "../data/categoryConfig";

export default function Vanities() {
  return <CategoryPage config={CATEGORY_CONFIG["vanities"]} />;
}
