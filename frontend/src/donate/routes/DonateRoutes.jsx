import { Route, Routes } from "react-router-dom";
import { DatabasePage, NotFoundPage } from "../pages";
import { ThanksPage } from "../pages/ThanksPage";

export const DonateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/thanks/*" element={<ThanksPage />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
