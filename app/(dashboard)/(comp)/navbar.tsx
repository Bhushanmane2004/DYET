import { Search, Bell, PlusCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-64 w-[calc(100%-256px)] h-16 flex items-center z-99  bg-white border-b border-gray-200 px-6 justify-between">
      <div className="relative w-1/2  bg-white">
        <Input
          type="text"
          placeholder="Search documents, courses & flashcards"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
        ></Input>
        <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
      </div>
      <div className="flex items-center space-x-6">
        <Button variant="outline" className="flex items-center space-x-2">
          <PlusCircle size={18} />
          <span>Add</span>
        </Button>
        <Bell className="text-gray-500 cursor-pointer" size={20} />
        <User className="text-gray-500 cursor-pointer" size={20} />
      </div>
    </header>
  );
};

export default Navbar;
