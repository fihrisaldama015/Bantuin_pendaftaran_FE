import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getTeamDetail } from "@/utils/userTeams";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Team from "@/components/dashboard/team";

const getTeamInformation = async (userId: string, accessToken: string) => {
  try {
    const res = await getTeamDetail(userId, accessToken);
    console.log("res", res);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error, "HOAK");
    if (typeof error === "number") {
      if (error === 401) {
        redirect("/login");
      }
    }
    console.log("error", error);
  }
};

async function TeamDetail({ params }: { params: { teamId: string } }) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const team = await getTeamInformation(params.teamId, accessToken);

  if (!team) {
    return <div>loading...</div>;
  }
  return (
    <div className="lg:flex">
      <Sidebar active={"group"} />
      {/* <Team /> */}
    </div>
  );
}

export default TeamDetail;
