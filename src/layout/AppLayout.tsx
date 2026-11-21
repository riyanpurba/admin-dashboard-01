import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from "../components/layout/Sidebar";
import MobileDrawer from "../components/layout/MobileDrawer";
import Topbar from "../components/layout/Topbar";


const AppLayout = () => {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Tutup drawer saat pindah halaman
  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Sidebar />
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
      <div className="min-h-screen lg:pl-[260px]">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />
        <main className="mx-auto max-w-[1600px] p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default AppLayout;