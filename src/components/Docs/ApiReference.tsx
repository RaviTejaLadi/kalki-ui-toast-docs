import { type ReactNode } from 'react';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';
import { PropTable, type PropRow } from './PropTable';
import { cn } from '@/lib/utils';

const toc = [
  { id: 'api-exports', label: 'Exports' },
  { id: 'api-toast', label: 'toast()' },
  { id: 'api-options', label: 'Options' },
  { id: 'api-toaster', label: 'Toaster' },
  { id: 'api-hook', label: 'useToast()' },
  { id: 'api-theming', label: 'Theming' },
  { id: 'api-a11y', label: 'Accessibility' },
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 space-y-5 overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm sm:p-8"
    >
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        {description && <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function ApiToc() {
  return (
    <nav className="lg:sticky lg:top-20 lg:self-start">
      <p className="mb-3 hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:block">
        On this page
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-border/70 lg:pb-0">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              'shrink-0 rounded-lg border border-border/70 bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground',
              'lg:rounded-none lg:border-0 lg:border-l-2 lg:border-transparent lg:bg-transparent lg:-ml-px lg:px-3 lg:py-1.5 lg:hover:border-primary lg:hover:bg-transparent'
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

const toastMethods: PropRow[] = [
  {
    name: 'toast(message, options?)',
    type: '(ReactNode | ToastOptions, ToastOptions?) => string',
    description: 'Creates a default toast. Returns the toast id. You can also pass a single options object.',
  },
  {
    name: 'toast.success',
    type: '(message, options?) => string',
    description: 'Success variant. Use for completed saves, copies, and confirmed actions.',
  },
  {
    name: 'toast.error / toast.danger',
    type: '(message, options?) => string',
    description: 'Danger variant. toast.error is an alias of toast.danger.',
  },
  {
    name: 'toast.warning',
    type: '(message, options?) => string',
    description: 'Warning variant for cautionary messages that are not failures.',
  },
  {
    name: 'toast.info',
    type: '(message, options?) => string',
    description: 'Informational variant for neutral updates.',
  },
  {
    name: 'toast.primary',
    type: '(message, options?) => string',
    description: 'Branded / high-emphasis variant.',
  },
  {
    name: 'toast.secondary',
    type: '(message, options?) => string',
    description: 'Low-emphasis supporting message.',
  },
  {
    name: 'toast.help',
    type: '(message, options?) => string',
    description: 'Guidance, tips, and extra context.',
  },
  {
    name: 'toast.message',
    type: '(message, options?) => string',
    description: 'Same as toast() — default variant helper.',
  },
  {
    name: 'toast.loading',
    type: '(message, options?) => string',
    description: 'Sticky toast with a spinner. duration defaults to false.',
  },
  {
    name: 'toast.promise',
    type: '(promise | () => promise, messages, options?) => Promise<T>',
    description:
      'Shows loading, then updates to success or error. messages.success and messages.error may be a string, options object, or callback that receives the resolved value / rejection.',
  },
  {
    name: 'toast.update',
    type: '(id: string, options: ToastOptions) => string',
    description: 'Updates an existing toast in place (loading → success). Resets the auto-dismiss timer.',
  },
  {
    name: 'toast.dismiss',
    type: '(id?: string) => void',
    description: 'Dismiss one toast by id, or every toast when id is omitted.',
  },
];

const toastOptions: PropRow[] = [
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Primary text. toast("Hello") sets this for you.',
  },
  {
    name: 'message',
    type: 'ReactNode',
    default: '—',
    description: 'Alias of title, kept for backward compatibility with addToast.',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Secondary line under the title.',
  },
  {
    name: 'variant',
    type: 'ToastVariant',
    default: "'default'",
    description:
      'default | primary | secondary | success | info | warning | danger | help | light | dark. Color is applied to the icon; the card stays neutral.',
  },
  {
    name: 'duration',
    type: 'number | false',
    default: '5000',
    description: 'Auto-dismiss delay in ms. false keeps the toast until it is closed or dismissed.',
  },
  {
    name: 'autoClose',
    type: 'number | false',
    description: 'Deprecated alias of duration.',
  },
  {
    name: 'icon',
    type: 'ReactNode | false',
    default: 'variant icon',
    description: 'Leading icon. Omit to use the default for the variant. Pass false to hide it.',
  },
  {
    name: 'action',
    type: '{ label, onClick, preventDismiss? }',
    description: 'Primary action button. The toast dismisses after click unless preventDismiss is true.',
  },
  {
    name: 'cancel',
    type: '{ label, onClick, preventDismiss? }',
    description: 'Secondary action button with the same contract as action.',
  },
  {
    name: 'showClose',
    type: 'boolean',
    default: 'true',
    description: 'Show the close button on this toast.',
  },
  {
    name: 'showProgress',
    type: 'boolean',
    default: 'false',
    description: 'Show a remaining-time bar when duration is a number. Off by default.',
  },
  {
    name: 'rounded',
    type: 'boolean',
    default: 'true',
    description: '8px corner radius on this toast.',
  },
  {
    name: 'id',
    type: 'string',
    default: 'auto',
    description: 'Stable id. Passing an existing id updates that toast instead of creating a new one.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Extra classes on the toast root.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    description: 'Inline styles on the toast root. Useful for one-off colors and gradients.',
  },
  {
    name: 'onDismiss',
    type: '(id: string) => void',
    description: 'Fired after the toast is removed from the queue, for any reason.',
  },
  {
    name: 'onAutoClose',
    type: '(id: string) => void',
    description: 'Fired when the toast closes because duration elapsed.',
  },
];

const toasterProps: PropRow[] = [
  {
    name: 'position',
    type: 'ToastPosition',
    default: "'bottom-right'",
    description: 'top-right | top-center | top-left | bottom-right | bottom-center | bottom-left',
  },
  {
    name: 'duration',
    type: 'number | false',
    default: '5000',
    description: 'Default auto-dismiss delay. Overridden per toast.',
  },
  {
    name: 'visibleToasts',
    type: 'number',
    default: '5',
    description: 'Maximum toasts shown at once. Oldest are dropped first.',
  },
  {
    name: 'offset',
    type: 'number',
    default: '16',
    description: 'Distance from the viewport edge, in pixels.',
  },
  {
    name: 'gap',
    type: 'number',
    default: '14',
    description: 'Space between stacked toasts, in pixels.',
  },
  {
    name: 'theme',
    type: "'light' | 'dark' | 'system'",
    default: "'system'",
    description: 'Color scheme. system follows prefers-color-scheme.',
  },
  {
    name: 'showClose',
    type: 'boolean',
    default: 'true',
    description: 'Show a close button unless a toast overrides it.',
  },
  {
    name: 'showIcon',
    type: 'boolean',
    default: 'true',
    description: 'Show default variant icons unless a toast overrides them.',
  },
  {
    name: 'showProgress',
    type: 'boolean',
    default: 'false',
    description: 'Show the remaining-time bar unless a toast overrides it.',
  },
  {
    name: 'pauseOnHover',
    type: 'boolean',
    default: 'true',
    description: 'Pause auto-dismiss while the pointer is over a toast.',
  },
  {
    name: 'pauseOnFocusLoss',
    type: 'boolean',
    default: 'true',
    description: 'Pause auto-dismiss while the window is unfocused.',
  },
  {
    name: 'rounded',
    type: 'boolean',
    default: 'true',
    description: '8px corner radius on every toast.',
  },
  {
    name: 'label',
    type: 'string',
    default: "'Notifications'",
    description: 'Accessible name for the notifications region.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Extra classes on the viewport.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    description: 'Inline styles on the viewport.',
  },
];

const hookRows: PropRow[] = [
  {
    name: 'toasts',
    type: 'ToastRecord[]',
    description: 'Current queue, newest first.',
  },
  {
    name: 'addToast',
    type: '(options: ToastOptions) => string',
    description: 'Enqueue a toast. Returns the id. message is an alias of title.',
  },
  {
    name: 'dismiss',
    type: '(id?: string) => void',
    description: 'Dismiss one toast or all toasts.',
  },
  {
    name: 'update',
    type: '(id: string, options: ToastOptions) => void',
    description: 'Update an existing toast in place.',
  },
  {
    name: 'removeToast',
    type: '(id: string | number) => void',
    description: 'Deprecated alias of dismiss(String(id)).',
  },
];

const cssVars: PropRow[] = [
  { name: '--kut-width', type: 'length', default: '356px', description: 'Toast card width.' },
  { name: '--kut-radius', type: 'length', default: '8px', description: 'Corner radius when rounded is true.' },
  { name: '--kut-offset', type: 'length', default: '16px', description: 'Viewport inset from the screen edge.' },
  { name: '--kut-gap', type: 'length', default: '14px', description: 'Gap between stacked toasts.' },
  { name: '--kut-bg', type: 'color', description: 'Card background. Neutral for every variant.' },
  { name: '--kut-fg', type: 'color', description: 'Title and action text.' },
  { name: '--kut-muted', type: 'color', description: 'Description and close icon.' },
  { name: '--kut-border', type: 'color', description: 'Card border.' },
  { name: '--kut-shadow', type: 'shadow', description: 'Card shadow.' },
  { name: '--kut-accent', type: 'color', description: 'Icon color for the active variant.' },
  { name: '--kut-font', type: 'font', default: 'inherit', description: 'Font family for toast text.' },
];

const exportsRows: PropRow[] = [
  { name: 'toast', type: 'function', description: 'Imperative API. Works from any module after Toaster is mounted.' },
  {
    name: 'Toaster',
    type: 'component',
    description: 'Viewport. Mount once near the app root. Portals to document.body.',
  },
  { name: 'ToastContainer', type: 'component', description: 'Deprecated alias of Toaster.' },
  { name: 'ToastProvider', type: 'component', description: 'Optional defaults provider. Not required for toast().' },
  { name: 'useToast', type: 'hook', description: 'React access to the same queue: addToast, dismiss, update, toasts.' },
  {
    name: 'Toast',
    type: 'component',
    description: 'Presentational card. Used internally; export is for custom layouts.',
  },
  { name: 'TOAST_SCOPE_CLASS', type: '"kalki-ui-toast"', description: 'Root class used to scope library CSS.' },
];

const ApiReference = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[200px_minmax(0,1fr)]">
      <ApiToc />
      <div className="min-w-0 space-y-6">
        <Section
          id="api-exports"
          title="Package exports"
          description="Import everything from kalki-ui-toast. Styles are bundled — no extra CSS import is required."
        >
          <SyntaxHighlighter
            code={`import {
  toast,
  Toaster,
  ToastProvider,
  ToastContainer,
  useToast,
  Toast,
  TOAST_SCOPE_CLASS,
} from "kalki-ui-toast";

import type {
  ToastOptions,
  ToasterProps,
  ToastVariant,
  ToastPosition,
  ToastTheme,
  ToastAction,
  ToastRecord,
  ToastContextValue,
  ToastPromiseMessages,
} from "kalki-ui-toast";`}
            language="tsx"
          />
          <PropTable nameHeader="Export" rows={exportsRows} />
        </Section>

        <Section
          id="api-toast"
          title="toast()"
          description="Call from event handlers, loaders, or non-React modules. Each helper returns the toast id."
        >
          <SyntaxHighlighter
            code={`const id = toast.success("Saved");

toast.error("Could not save", {
  description: "Please try again.",
});

toast.promise(save(), {
  loading: "Saving…",
  success: (data) => \`Saved \${data.id}\`,
  error: (err) => err.message,
});

toast.update(id, { title: "Still working…" });
toast.dismiss(id);
toast.dismiss();`}
            language="tsx"
          />
          <PropTable nameHeader="Method" rows={toastMethods} />
        </Section>

        <Section
          id="api-options"
          title="Toast options"
          description="Accepted by toast(), toast.success(), addToast(), and toast.update()."
        >
          <PropTable rows={toastOptions} />
        </Section>

        <Section
          id="api-toaster"
          title="Toaster props"
          description="Mount one Toaster. It portals into document.body and reads the shared queue."
        >
          <SyntaxHighlighter
            code={`<Toaster
  position="top-right"
  theme="system"
  duration={5000}
  visibleToasts={5}
  offset={16}
  gap={14}
  showClose
  showIcon
  pauseOnHover
  pauseOnFocusLoss
/>`}
            language="tsx"
          />
          <PropTable rows={toasterProps} />
        </Section>

        <Section
          id="api-hook"
          title="useToast()"
          description="Optional React hook. Does not require ToastProvider. Toaster still needs to be mounted to render."
        >
          <SyntaxHighlighter
            code={`const { toasts, addToast, dismiss, update } = useToast();

addToast({
  message: "Saved",
  variant: "success",
  autoClose: 4000,
});`}
            language="tsx"
          />
          <PropTable nameHeader="Field" rows={hookRows} />
        </Section>

        <Section
          id="api-theming"
          title="Theming and CSS variables"
          description="theme on Toaster switches light/dark. Override variables on .kalki-ui-toast for a custom palette."
        >
          <SyntaxHighlighter
            code={`.kalki-ui-toast {
  --kut-bg: #fff;
  --kut-fg: #171717;
  --kut-muted: #737373;
  --kut-accent: #16a34a;
  --kut-radius: 8px;
  --kut-width: 356px;
}`}
            language="css"
          />
          <PropTable nameHeader="Variable" rows={cssVars} />
        </Section>

        <Section id="api-a11y" title="Behavior and accessibility" description="Built-in interaction and a11y defaults.">
          <ul className="space-y-3 rounded-xl border border-border/70 bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              role=&quot;status&quot; for most variants, role=&quot;alert&quot; for warning and danger.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              The viewport is a polite live region labelled &quot;Notifications&quot; (override with label).
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Hover pauses the timer. Window blur does the same when pauseOnFocusLoss is true.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Swipe horizontally to dismiss. Close and action buttons are keyboard-focusable.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              prefers-reduced-motion disables enter, exit, and loader animations.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Newest toasts sit closest to the chosen edge. visibleToasts (default 5) drops the oldest.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default ApiReference;
