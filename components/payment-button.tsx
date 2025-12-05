import React from "react";
import { Button } from "./ui/button";

const PaymentButton = () => {
  return (
    <Button
      variant="outline"
      className="w-full rounded-md bg-linear-to-br from-[#9685db] via-[#9434e6] to-[#cc3Bd4]"
    >
      Upgrade
    </Button>
  );
};

export default PaymentButton;
