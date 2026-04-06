import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <div className="w-64 border-r p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/basics" className="cursor-pointer hover:text-purple-500">
            Basics
          </Link>
        </li>
        <li>
          <Link to="/basics" className="cursor-pointer hover:text-purple-500">
            Hooks
          </Link>
        </li>
        <li>
          <Link to="/basics" className="cursor-pointer hover:text-purple-500">
            Forms
          </Link>
        </li>
      </ul>
    </div> */}
      <div className="w-64 border-r p-4 space-y-6">
        {/* VARIABLES */}
        <div>
          <Link
            to="/variables"
            className="font-semibold text-lg hover:text-purple-500"
          >
            Variables
          </Link>

          <ul className="ml-4 mt-2 space-y-2 text-sm">
            <li>
              <a href="/variables#var" className="hover:text-purple-500">
                var
              </a>
            </li>
            <li>
              <a href="/variables#let" className="hover:text-purple-500">
                let
              </a>
            </li>
            <li>
              <a href="/variables#const" className="hover:text-purple-500">
                const
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
