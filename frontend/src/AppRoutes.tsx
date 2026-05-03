import { Navigate, Route, Routes,  } from "react-router-dom";
import { HomePage } from "./components/home/Homepage";
import { PartnerProfile } from "./components/private/PartnerProfile";
import { PartnerLimits } from "./components/private/PartnerLimits";
import { PartnerLayout } from "./components/private/PartnerLayout";
import { withAuth } from "./HOC/withAuth";
import { NotFound } from "./components/common/NotFound";

const ProtectedPartnerProfile = withAuth(PartnerProfile);
const ProtectedPartnerLimits = withAuth(PartnerLimits);

export function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />

      {/* Private */}
      <Route path="/partner" element={<PartnerLayout />}>
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<ProtectedPartnerProfile />} />
        <Route path="limits" element={<ProtectedPartnerLimits />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
