import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth";
import { DonatePage, DonateRoutes } from "../donate";
import { ThanksPage } from "../donate/pages/ThanksPage";
import { VideoBackground } from "../components/VideoBackground";

export const AppRouter = () => {
  return (
    <div className="homePage">
      <VideoBackground />
      <Routes>
        <Route path="/" element={<DonatePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="*" element={<DonateRoutes />} />
        <Route path="thankspage" element={<ThanksPage />} />
      </Routes>
    </div>
  );
};
