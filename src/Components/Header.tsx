const Header = () => {
  return (
    <>
      <div className="flex sticky top-0 justify-start items-center h-10 w-full bg-primary-600 border-b border-white/10 z-10">
        <div className="flex items-center">
          <img src="/icon.png" alt="Logo" className="ml-3 w-5 h-5" />
          <h1 className="ml-4 text-accentText font-bold">OptimizeWoW</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
