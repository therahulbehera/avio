import React from "react";

const PaymentButton = ({ text }: { text: string }) => {
  return (
    <div className="w-full rounded-sm bg-linear-to-br from-[#9685db] via-[#9434e6] to-[#cc3Bd4] p-px">
      <div className="w-full h-full p-1 rounded-sm bg-neutral-900 text-center">
        {text}
      </div>
    </div>
  );
};

export default PaymentButton;
