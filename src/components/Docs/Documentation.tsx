import { useState, type ReactNode } from 'react';
import { ArrowRightLeft, BookOpen, Code2, Package } from 'lucide-react';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import { cn } from '@/lib/utils';

const install = `npm install kalki-ui-toast
# or
yarn add kalki-ui-toast
# or
pnpm add kalki-ui-toast`;

const setup = `import { Toaster, toast } from "kalki-ui-toast";

export function App() {
  return (
    <>
      <YourApp />
      <Toaster position="top-right" />
    </>
  );
}`;

const usage = `import { toast } from "kalki-ui-toast";

toast("Hello");
toast.success("Profile updated");
toast.error("Could not save", {
  description: "Please try again.",
});

toast.success("Event created", {
  description: "Monday, January 3rd at 6:00pm",
  action: {
    label: "Undo",
    onClick: () => restore(),
  },
});`;

const hook = `import { useToast } from "kalki-ui-toast";

function SaveButton() {
  const { addToast, dismiss } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          message: "Changes saved",
          variant: "success",
        })
      }
    >
      Save
    </button>
  );
}`;

const promise = `toast.promise(saveProfile(), {
  loading: "Saving…",
  success: (data) => \`Saved \${data.name}\`,
  error: (err) => err.message,
});

const id = toast.loading("Uploading…");
toast.update(id, {
  variant: "success",
  title: "Uploaded",
  duration: 4000,
});`;

const legacy = `// Previous API still works
import { ToastProvider, ToastContainer, useToast } from "kalki-ui-toast";

function App() {
  return (
    <ToastProvider>
      <Page />
      <ToastContainer position="top-right" />
    </ToastProvider>
  );
}

// Prefer this going forward
import { Toaster, toast } from "kalki-ui-toast";

<Toaster position="top-right" />
toast.success("Saved");`;

const tabs = [
  { id: 'install', label: 'Install', icon: Package },
  { id: 'usage', label: 'Usage', icon: BookOpen },
  { id: 'hook', label: 'Hook', icon: Code2 },
  { id: 'migration', label: 'Migration', icon: ArrowRightLeft },
] as const;

type TabId = (typeof tabs)[number]['id'];

function DocBlock({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

const Documentation = () => {
  const [tab, setTab] = useState<TabId>('install');

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <nav className="flex gap-2 overflow-x-auto lg:sticky lg:top-20 lg:block lg:self-start lg:overflow-visible">
        <p className="mb-3 hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:block">
          Guides
        </p>
        <div className="flex w-full gap-2 lg:flex-col">
          {tabs.map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all',
                  active
                    ? 'border-primary/30 bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                    : 'border-border/70 bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="min-w-0 rounded-2xl border border-border/70 bg-card p-5 shadow-sm sm:p-8">
        {tab === 'install' && (
          <div className="space-y-8">
            <DocBlock
              title="Installation"
              description="React 18 or 19. Styles ship with the package and stay scoped under .kalki-ui-toast, so they will not override your app CSS."
            >
              <SyntaxHighlighter code={install} language="js" />
            </DocBlock>
            <DocBlock
              title="Mount Toaster once"
              description="Place Toaster at the root. After that, toast() works from any file. No provider is required."
            >
              <SyntaxHighlighter code={setup} language="tsx" />
            </DocBlock>
          </div>
        )}

        {tab === 'usage' && (
          <div className="space-y-8">
            <DocBlock
              title="Imperative API"
              description="Helpers return an id you can pass to toast.update or toast.dismiss."
            >
              <SyntaxHighlighter code={usage} language="tsx" />
            </DocBlock>
            <DocBlock
              title="Promises and updates"
              description="toast.promise swaps loading → success/error on the same toast. toast.loading plus toast.update does the same by hand."
            >
              <SyntaxHighlighter code={promise} language="tsx" />
            </DocBlock>
          </div>
        )}

        {tab === 'hook' && (
          <DocBlock
            title="useToast"
            description="Use the hook when you want React state. addToast accepts the same options as toast(), including the older message and autoClose fields."
          >
            <SyntaxHighlighter code={hook} language="tsx" />
          </DocBlock>
        )}

        {tab === 'migration' && (
          <div className="space-y-6">
            <DocBlock
              title="From Provider + Container"
              description="ToastProvider and ToastContainer still work. New apps should mount Toaster and call toast()."
            >
              <SyntaxHighlighter code={legacy} language="tsx" />
            </DocBlock>
            <ul className="space-y-2.5 rounded-xl border border-border/70 bg-muted/30 p-4 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                addToast still accepts message and autoClose.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                toast.error maps to the danger variant.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Ids are strings (kalki-toast-1), not numbers.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Close button and icons are on by default.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documentation;
