import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type Props = {
  current: string;
  label: string;
  landing: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
  console.log(landing);
  const isSubscribed = current === label;
  const plan = plans.find((p) => p.name === label);
  return (
    <div
      className={cn(
        "flex-1 rounded-xl p-px w-full h-full",
        isSubscribed
          ? "bg-neutral-600"
          : "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 "
      )}
    >
      <Card className="w-full h-full justify-between">
        <CardHeader>
          <CardTitle>
            {isSubscribed ? (
              "Your Current Plan"
            ) : (
              <>
                {label + " "}
                <span className="bg-linear-to-r from-[#cc3bd4] to-[#d064ac] bg-clip-text text-transparent">
                  SmartAI
                </span>
              </>
            )}
          </CardTitle>
          <CardDescription>
            This is what your plan covers for automations and Ai features.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {plan?.features.map((f, i) => (
            <p key={i} className="text-sm text-neutral-300">
              {f}
            </p>
          ))}
        </CardContent>
        <CardFooter>
          {!isSubscribed ? (
            <Button className="bg-linear-to-br w-full text-white from-indigo-500 via-purple-500 to-pink-500 ">
              $ {plan?.monthlyPrice}
            </Button>
          ) : (
            <Button variant={"outline"} className="w-full text-neutral-500">
              Active
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCard;
