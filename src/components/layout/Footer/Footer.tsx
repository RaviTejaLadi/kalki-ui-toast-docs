import Logo from '../TopBar/Logo';

const GITHUB_URL = 'https://github.com/RaviTejaLadi/kalki-ui-toast';

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="inline-flex items-center" aria-label="Kalki UI Toast">
          <Logo />
        </a>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <a href="#examples" className="transition-colors hover:text-foreground">
            Examples
          </a>
          <a href="#customize" className="transition-colors hover:text-foreground">
            Customize
          </a>
          <a href="#docs" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <a href="#api" className="transition-colors hover:text-foreground">
            API
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          Designed and developed by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ravitejaladi.vercel.app/"
            className="font-medium text-foreground transition-colors hover:text-primary"
            aria-label="Ravi Teja Ladi"
          >
            Ravi Teja Ladi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
