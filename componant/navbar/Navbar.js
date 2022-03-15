const Navbar = ({ filterItem, nav }) => {
  return (
    <nav className="flex flex-wrap gap-2 justify-center py-5">
      {nav.map((value) => {
        return (
          <button
            className="bg-yellow-900 rounded-md py-2 px-4 text-white font-bold capitalize"
            onClick={() => filterItem(value)}
          >
            {value}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
