import React from "react";
import IntegrationCard from "./_components/integration-card";
import { Instagram, Weight } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <IntegrationCard
        title={"Instagram"}
        description={"loremipsumfasd;lkfjadl"}
        icon={<Instagram />}
        strategy={""}
      />
      <IntegrationCard
        title={"Salesforce"}
        description={"loremipsumfasd;lkfjadl"}
        icon={<Weight />}
        strategy={""}
      />
    </div>
  );
};

export default page;
