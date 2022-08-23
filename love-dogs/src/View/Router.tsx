import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BreedCategory from "./Pages/BreedCategory";
import BreesSubCategory from "./Pages/BreesSubCategory";
// import BordeerCategory from "./Pages/BreedCategoryCard";
import MainPage from "./Pages/MainPage";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":category" element={<BreedCategory />} />
          <Route path=":category/:subCatedory" element={<BreesSubCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
