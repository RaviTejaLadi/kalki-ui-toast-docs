import { Github } from 'lucide-react';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';

const TopBar = () => {
  return (
    <header className="sticky h-12 top-0 z-50  backdrop-blur bg-backdrop-foreground bg-opacity-10">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com" className="text-sm text-muted-foreground hover:text-foreground">
              <Github className="w-3.5 h-3.5" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
