import { Input } from "./input";
import AutomationButton from "./automation-button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex-1 px-2 flex justify-center items-center gap-2">
      <Search className="text-neutral-500 p-0.5" />
      <Input placeholder="Search" className="rounded-full flex-1" />
      <AutomationButton />
    </div>
  );
};

export default SearchBar;
