import { Github } from 'lucide-react';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from 'kalki-ui';

const GITHUB_URL = 'https://github.com/RaviTejaLadi/kalki-ui-toast';

const menu = [
  { title: 'Examples', url: '#examples' },
  { title: 'Docs', url: '#docs' },
  { title: 'API', url: '#api' },
];

const TopBar = () => {
  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-border/70 bg-background/80 px-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 sm:px-6 lg:px-10">
      <nav className="flex w-full items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <a href="/" className="w-auto shrink-0" aria-label="Kalki UI Toast">
            <Logo />
          </a>
          <div className="hidden items-center gap-0.5 sm:flex">
            {menu.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="inline-flex h-8 items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="xs" aria-label="View source code">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
