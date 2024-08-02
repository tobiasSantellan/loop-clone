import { UserButton } from "@clerk/nextjs";
import React from "react";
import Header from "./_components/Header";
import WorkspaceList from "@/app/_components/WorkspaceList";

function Dashboard() {
  return (
    <div>
      <Header />
      <WorkspaceList />
    </div>
  );
}

export default Dashboard;
