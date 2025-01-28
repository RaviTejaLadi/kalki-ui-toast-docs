import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Kalki UI Toast</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Examples
            </a>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Code2 className="inline w-4 h-4" /> and ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
