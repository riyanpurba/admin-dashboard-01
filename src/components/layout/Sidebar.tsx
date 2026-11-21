// import type { NavItem } from '../../config/navigation';
import SidebarContent from './SidebarContent';

// interface SidebarProps {
//     items: NavItem[];
//   }
  
  /** Sidebar tetap untuk layar besar (lebar 260px, sinkron dengan lg:pl-[260px] di AdminLayout). */
  const Sidebar = () => (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] border-r border-neutral-200 bg-white lg:block">
      <SidebarContent />
    </aside>
  );
  
  export default Sidebar;