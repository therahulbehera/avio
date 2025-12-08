import { onBoardUser } from "@/app/actions/user";
import React from "react";

const page = async () => {
  const user = await onBoardUser();

  return (
    <div>
      {(user.status === 200 || user.status === 201) && user.data?.firstName}
    </div>
  );
};

export default page;
