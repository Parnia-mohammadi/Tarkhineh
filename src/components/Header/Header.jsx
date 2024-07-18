function Header() {
  return (
    <div className="flex flex-row-reverse justify-around items-center px-5 py-4">
      <img src="src/assets/Header/HamburgerMenu.svg" alt="menu" />
      <img src="src/assets/Header/Logo.svg" alt="logo" />
      <div className="flex flex-row-reverse gap-x-1">
        <div className="bg-green-tint border-none rounded-[4px] p-1">
          <img src="src/assets/Header/CartLogo.svg" alt="cartLogo" />
        </div>
        <div className="bg-green-tint border-none rounded-[4px] p-1">
          <img src="src/assets/Header/UserLogo.svg" alt="userLogo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
