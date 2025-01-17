import Button from "../button";
import Logo from "../logo";

const NavbarBack = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 h-navbar-height w-full border-b border-primary-neutral bg-primary-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Resume Button */}
          <a href="/">
            <Button size={"medium"} variant={"default"}>
              Back
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBack;
