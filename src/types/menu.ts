import type { LucideIcon } from "lucide-react";

/** Fase rilis fitur: 1 = MVP, 2 = Fase 2, 3 = Fase 3 */
export type MenuPhase = 1 | 2 | 3;

/** Kunci permission yang dipakai untuk menampilkan/menyembunyikan menu per peran */
export type Permission =
  | "dashboard.view"
  | "announcement.view"
  | "employee.view"
  | "organization.view"
  | "offboarding.view"
  | "attendance.view"
  | "shift.view"
  | "overtime.view"
  | "leave.view"
  | "holiday.view"
  | "payroll.view"
  | "salary-component.view"
  | "tax.view"
  | "loan.view"
  | "reimbursement.view"
  | "recruitment.view"
  | "onboarding.view"
  | "performance.view"
  | "training.view"
  | "discipline.view"
  | "asset.view"
  | "travel.view"
  | "helpdesk.view"
  | "report.view"
  | "settings.view";

/** Sub-menu (anak dari MenuItem) */
export interface MenuChild {
  id: string;
  label: string;
  path: string;
  /** Opsional: override permission dari menu induk */
  permission?: Permission;
}

/** Menu utama di dalam sebuah grup */
export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  phase: MenuPhase;
  permission: Permission;
  children?: MenuChild[];
}

/** Kelompok menu (judul seksi di sidebar) */
export interface MenuGroup {
  id: string;
  label: string;
  items: MenuItem[];
}

/** Menu di footer sidebar: punya path atau action (mis. logout) */
export interface FooterMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
  action?: "logout";
}