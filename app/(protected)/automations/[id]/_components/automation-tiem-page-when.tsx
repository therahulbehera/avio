import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const AutomationItemPageBodyWhen = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">When</CardTitle>
      </CardHeader>
      <CardContent>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a trigger" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"dm"}>Someone sends me a dm</SelectItem>
            <SelectItem value={"comment"}>
              Someone comments on my post
            </SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <Input type="text" placeholder="Keyword" />
        <span className="text-primary text-sm pt-2">
          Keyword that the client sends.
        </span>
      </CardFooter>
    </Card>
  );
};

export default AutomationItemPageBodyWhen;
