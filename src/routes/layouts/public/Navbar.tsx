import logo from '../../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="shadow-lg fixed w-full">
      <div className="flex w-full items-center bg-blue-800 h-[30px] px-2"></div>
      <div className="flex w-full items-center bg-primary h-[80px] px-2">
        <img src={logo} alt="logo" className="h-full" />
        <p className="text-2xl font-bold text-white">
          {process.env.REACT_APP_NAME}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
