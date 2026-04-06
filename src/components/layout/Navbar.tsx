import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Derive breadcrumb label from path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Home";

    const segment = path.split("/").pop() ?? "";
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <header className="h-14 border-b border-gray-200 bg-white flex items-center px-6 gap-3 sticky top-0 z-40">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 mr-2">
        <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">N</span>
        </div>
        <span className="font-bold text-gray-900 text-sm hidden sm:block">DevNotes</span>
      </Link>

      {/* Divider */}
      <span className="text-gray-300">/</span>

      {/* Current page breadcrumb */}
      <span className="text-sm font-medium text-gray-600">{getPageTitle()}</span>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Badge */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        JS & React Ref
      </div>
    </header>
  );
};

export default Navbar;
