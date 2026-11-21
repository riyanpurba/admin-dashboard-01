// import type { NavItem } from "../../config/navigation";
import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarUser from "./SidebarUser";

// interface SidebarContentProps {
//     items: NavItem[];
// }

const SidebarContent = () => {
    return (
        <div className="flex h-full flex-col">
            <SidebarBrand />
            <SidebarNav />
            <SidebarUser />
        </div>
    )
}

export default SidebarContent;