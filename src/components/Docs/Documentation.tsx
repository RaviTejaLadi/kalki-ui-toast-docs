import { Tab, Tabs } from 'kalki-ui';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';

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

const Documentation = () => {
  return (
    <Tabs variant="secondary" size="sm" className="docs-card rounded-xl p-4 sm:p-5">
      <Tab label="Install" value="install">
        <div className="space-y-4 p-2">
          <div>
            <h3 className="mb-1 text-base font-semibold text-foreground">Installation</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              React 18 or 19. Styles ship with the package and stay scoped under .kalki-ui-toast, so they will not
              override your app CSS.
            </p>
            <SyntaxHighlighter code={install} language="js" />
          </div>
          <div>
            <h3 className="mb-1 text-base font-semibold text-foreground">Mount Toaster once</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Place Toaster at the root. After that, toast() works from any file. No provider is required.
            </p>
            <SyntaxHighlighter code={setup} language="tsx" />
          </div>
        </div>
      </Tab>

      <Tab label="Usage" value="usage">
        <div className="space-y-4 p-2">
          <div>
            <h3 className="mb-1 text-base font-semibold text-foreground">Imperative API</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Helpers return an id you can pass to toast.update or toast.dismiss.
            </p>
            <SyntaxHighlighter code={usage} language="tsx" />
          </div>
          <div>
            <h3 className="mb-1 text-base font-semibold text-foreground">Promises and updates</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              toast.promise swaps loading → success/error on the same toast. toast.loading plus toast.update does the
              same by hand.
            </p>
            <SyntaxHighlighter code={promise} language="tsx" />
          </div>
        </div>
      </Tab>

      <Tab label="Hook" value="hook">
        <div className="space-y-4 p-2">
          <h3 className="mb-1 text-base font-semibold text-foreground">useToast</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            Use the hook when you want React state. addToast accepts the same options as toast(), including the older
            message and autoClose fields.
          </p>
          <SyntaxHighlighter code={hook} language="tsx" />
        </div>
      </Tab>

      <Tab label="Migration" value="migration">
        <div className="space-y-4 p-2">
          <h3 className="mb-1 text-base font-semibold text-foreground">From Provider + Container</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            ToastProvider and ToastContainer still work. New apps should mount Toaster and call toast().
          </p>
          <SyntaxHighlighter code={legacy} language="tsx" />
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>addToast still accepts message and autoClose.</li>
            <li>toast.error maps to the danger variant.</li>
            <li>Ids are strings (kalki-toast-1), not numbers.</li>
            <li>Close button, icons, and progress are on by default.</li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  );
};

export default Documentation;
