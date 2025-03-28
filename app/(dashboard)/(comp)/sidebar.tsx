import {
  Home,
  BookOpen,
  List,
  Newspaper,
  MessagesSquare,
  Users,
  Briefcase,
  X,
} from "lucide-react";

interface SidebarProps {
  setActiveButton: (name: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ setActiveButton, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed top-0 left-0 h-screen bg-white border-r border-gray-200 p-4 md:p-7
        flex flex-col z-50 w-64 md:w-64 transition-all duration-300 ease-in-out shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      `}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">
            IEEE Pune
          </h2>
          <button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-5 flex-1 space-y-4 md:space-y-6 overflow-y-auto">
          <NavItem
            icon={<Home size={20} />}
            label="Dashboard"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<BookOpen size={20} />}
            label="Courses"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<List size={20} />}
            label="Study Lists"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<Newspaper size={20} />}
            label="Newsfeed"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<MessagesSquare size={20} />}
            label="Chat"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<Users size={20} />}
            label="Groups"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
          <NavItem
            icon={<Briefcase size={20} />}
            label="Career Corner"
            setActiveButton={setActiveButton}
            onClose={onClose}
          />
        </nav>

        {/* Log Out Button */}
        <div className="mt-auto pb-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors"
            onClick={() => {
              setActiveButton("Log Out");
              onClose();
            }}
          >
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  setActiveButton: (name: string) => void;
  onClose: () => void;
}

const NavItem = ({ icon, label, setActiveButton, onClose }: NavItemProps) => (
  <button
    className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition w-full text-left"
    onClick={() => {
      setActiveButton(label);
      onClose();
    }}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Sidebar;
