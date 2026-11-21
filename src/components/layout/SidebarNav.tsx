import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { menuGroups } from '../../config/menu';
import type { MenuGroup, MenuItem, MenuPhase, Permission } from '../../types/menu';

interface SidebarNavProps {
  groups?: MenuGroup[];
  /** Daftar permission milik user. Jika kosong/undefined, semua menu ditampilkan. */
  permissions?: Permission[];
  /** Tampilkan menu hingga fase ini (1 = MVP saja). */
  maxPhase?: MenuPhase;
}

const linkBase =
  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30';
const linkActive = 'bg-brand-red text-white';
const linkIdle = 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900';

const childBase =
  'block rounded-lg px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30';
const childActive = 'bg-brand-red/10 font-semibold text-brand-red';
const childIdle = 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900';

const isInSection = (pathname: string, path: string) =>
  pathname === path || pathname.startsWith(`${path}/`);

const filterGroups = (
  groups: MenuGroup[],
  permissions: Permission[] | undefined,
  maxPhase: MenuPhase,
): MenuGroup[] => {
  const allowed = (permission: Permission) => !permissions || permissions.includes(permission);

  return groups
    .map((group) => ({
      ...group,
      items: group.items
        .filter((item) => item.phase <= maxPhase && allowed(item.permission))
        .map((item) => ({
          ...item,
          children: item.children?.filter((child) => allowed(child.permission ?? item.permission)),
        })),
    }))
    .filter((group) => group.items.length > 0);
};

interface NavItemProps {
  item: MenuItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const NavItem = ({ item, isOpen, onToggle }: NavItemProps) => {
  const { pathname } = useLocation();
  const { id, label, path, icon: Icon, children } = item;

  if (!children?.length) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
      >
        <Icon size={18} aria-hidden="true" />
        {label}
      </NavLink>
    );
  }

  const sectionActive = isInSection(pathname, path);
  const submenuId = `submenu-${id}`;

  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        aria-controls={submenuId}
        className={`${linkBase} w-full ${
          sectionActive ? 'text-neutral-900' : linkIdle
        } ${sectionActive ? 'bg-neutral-100' : ''}`}
      >
        <Icon size={18} aria-hidden="true" />
        <span className="flex-1 text-left">{label}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul id={submenuId} className="ml-5 mt-1 space-y-0.5 border-l border-neutral-200 pl-3">
          {children.map((child) => (
            <li key={child.id}>
              <NavLink
                to={child.path}
                end
                className={({ isActive }) => `${childBase} ${isActive ? childActive : childIdle}`}
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SidebarNav = ({ groups = menuGroups, permissions, maxPhase = 3 }: SidebarNavProps) => {
  const { pathname } = useLocation();
  const visibleGroups = filterGroups(groups, permissions, maxPhase);

  // Sub-menu yang sesuai halaman aktif terbuka otomatis saat pertama render.
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    visibleGroups.forEach((group) =>
      group.items.forEach((item) => {
        if (item.children?.length && isInSection(pathname, item.path)) initial.add(item.id);
      }),
    );
    return initial;
  });

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="Menu utama">
      {visibleGroups.map((group) => (
        <section key={group.id} aria-labelledby={`group-${group.id}`}>
          <p
            id={`group-${group.id}`}
            className="px-3 pb-1 pt-4 text-xs font-semibold text-neutral-400"
          >
            {group.label}
          </p>
          <div className="space-y-1">
            {group.items.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={toggle}
              />
            ))}
          </div>
        </section>
      ))}
    </nav>
  );
};

export default SidebarNav;