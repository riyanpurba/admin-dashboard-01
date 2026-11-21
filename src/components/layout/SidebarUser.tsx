import { LogOut } from 'lucide-react';
// import { ROLE_LABEL } from '../../config/navigation';
// import { logout } from '../../lib/auth';
// import type { AuthUser } from '../../lib/auth';

// interface SidebarUserProps {
//   user: null;
// }

const SidebarUser = () => (
  <div className="shrink-0 border-t border-neutral-200 p-3">
    <div className="flex items-center gap-3 px-2 py-2">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-700">
        {/* {user?.name?.charAt(0).toUpperCase() ?? '?'} */}Admin
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-neutral-900">Pengguna</p>
        <p className="truncate text-xs text-neutral-500"></p>
      </div>
    </div>

    <button
      type="button"
      className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
    >
      <LogOut size={18} aria-hidden="true" />
      Keluar
    </button>
  </div>
);

export default SidebarUser;
