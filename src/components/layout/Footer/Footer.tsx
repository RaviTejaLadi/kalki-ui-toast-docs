const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Built with ❤️{" "}
            <div className="flex flex-col">
              <span className="text-md my-0 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kalki UI Toast
              </span>
              <span className="text-[.5rem] font-medium -mt-2 text-gray-500 tracking-wider">
                PREMIUM
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
