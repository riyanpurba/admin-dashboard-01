import { Menu } from 'lucide-react';

interface TopbarProps {
//   title: string;
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => (
  <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-neutral-200 bg-white/90 px-5 backdrop-blur md:px-8">
    <button
      type="button"
      aria-label="Buka menu"
      onClick={onMenuClick}
      className="-ml-2 grid h-10 w-10 place-items-center rounded-lg text-neutral-700 hover:bg-neutral-100 lg:hidden"
    >
      <Menu size={20} aria-hidden="true" />
    </button>
    <h1 className="text-lg font-bold text-neutral-900">title</h1>
  </header>
);

export default Topbar;
