const Header = () => {
  function reloadPage() {
    window.location.reload();
  }

  return (
    <div
      className="bg-slate-900 py-6 px-6 text-white cursor-pointer flex gap-2 items-center"
      onClick={reloadPage}
    >
        <img src="logo.png" className="max-w-8 max-h-8" alt="logo" />
      <h1 className="text-xl font-bold">GitHub User Finder</h1>
    </div>
  );
};

export default Header;
