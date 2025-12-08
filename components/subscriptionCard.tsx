import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import PaymentButton from "./ui/payment-button";

const SubscriptionCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Upgrade to{" "}
          <span className="bg-linear-to-r from-[#cc3bd4] to-[#d064ac] bg-clip-text text-transparent">
            SmartAI
          </span>
        </CardTitle>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#9b9ca0] font-light">
          Unlock all features <br /> including AI-powered tools
        </p>
      </CardContent>
      <CardFooter>
        <PaymentButton text="Upgrade" />
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
