import CategoryPage from "../components/layout/CategoryPage";
import { CATEGORY_CONFIG } from "../data/categoryConfig";

export default function Kitchens() {
  return <CategoryPage config={CATEGORY_CONFIG.kitchens} />;
}
