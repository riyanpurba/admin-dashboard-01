import { useEffect } from 'react';
import { X } from 'lucide-react';
// import type { NavItem } from '../../config/navigation';
// import type { AuthUser } from '../../lib/auth';
import SidebarContent from './SidebarContent';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
//   items: NavItem[];
//   user: AuthUser | null;
}

/** Menu geser untuk HP/tablet. Tertutup lewat klik latar, tombol X, atau tombol Esc. */
const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu navigasi">
      <button type="button" aria-label="Tutup menu" onClick={onClose} className="absolute inset-0 bg-black/40" />
      <aside className="relative h-full w-[260px] max-w-[85%] bg-white shadow-xl">
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={onClose}
          className="absolute right-2 top-3.5 grid h-9 w-9 place-items-center rounded-lg text-neutral-500 hover:bg-neutral-100"
        >
          <X size={18} aria-hidden="true" />
        </button>
        <SidebarContent />
      </aside>
    </div>
  );
};

export default MobileDrawer;
