import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: string;
};

const IntegrationCard = ({ title, description, icon, strategy }: props) => (
  <Card className="flex-1 flex flex-row justify-center items-center">
    <CardHeader className="flex-1">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant={"outline"}>Connect</Button>
    </CardContent>
  </Card>
);

export default IntegrationCard;
