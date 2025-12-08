import PaymentCard from "@/components/ui/plan-card";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
      <PaymentCard current={"Starter"} label={"Starter"} landing={false} />
      <PaymentCard current={"Starter"} label={"Professional"} landing={false} />
    </div>
  );
};

export default page;
