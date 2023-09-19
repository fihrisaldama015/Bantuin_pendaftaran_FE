
import Team from "@/components/dashboard/team";
import Sidebar from "@/components/dashboard/sidebar";
function Page() {
  return (
    <div className="lg:flex">
        <Sidebar/>
        <Team/>
    </div>
  );
}

export default Page;