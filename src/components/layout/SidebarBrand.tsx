import { School } from 'lucide-react';

const SidebarBrand = () => (
  <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-neutral-200 px-5">
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-red text-white">
      <School size={20} aria-hidden="true" />
    </div>
    <div className="leading-tight">
      <p className="text-sm font-bold text-neutral-900">HRIS</p>
      <p className="text-xs text-neutral-500">SMK Bintang Timur</p>
    </div>
  </div>
);

export default SidebarBrand;
