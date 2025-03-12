import {
  Home,
  BookOpen,
  List,
  Newspaper,
  MessagesSquare,
  Users,
  Briefcase,
} from "lucide-react";

const Sidebar = ({
  setActiveButton,
}: {
  setActiveButton: (name: string) => void;
}) => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-7 flex flex-col fixed">
      <h2 className="text-2xl font-bold text-blue-600">ABCDE</h2>
      <nav className="mt-5 flex-1 space-y-6">
        <NavItem
          icon={<Home size={20} />}
          label="Dashboard"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<BookOpen size={20} />}
          label="Courses"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<List size={20} />}
          label="Study Lists"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<Newspaper size={20} />}
          label="Newsfeed"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<MessagesSquare size={20} />}
          label="Chat"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<Users size={20} />}
          label="Groups"
          setActiveButton={setActiveButton}
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label="Career Corner"
          setActiveButton={setActiveButton}
        />
      </nav>
      {/* Log Out Button at Bottom */}
      <div className="mt-auto">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          onClick={() => setActiveButton("Log Out")}
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({
  icon,
  label,
  setActiveButton,
}: {
  icon: React.ReactNode;
  label: string;
  setActiveButton: (name: string) => void;
}) => (
  <button
    className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition w-full text-left"
    onClick={() => setActiveButton(label)}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Sidebar;
