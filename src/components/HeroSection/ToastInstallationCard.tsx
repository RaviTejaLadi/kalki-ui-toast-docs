import { SyntaxHighlighter } from '../common/SyntaxHighLighter/SyntaxHighLighter';

const ToastInstallationCard = () => {
  const stepOne = `npm i kalki-ui-toast`;
  const stepTwo = `<ToastProvider>
  <App />
  <ToastContainer />
</ToastProvider>`;
  const stepThree = `addToast({
  message: 'Please check your input',
  variant: 'warning',
  icon: <AlertCircle className="w-5 h-5" />,
})`;

  const steps = [
    {
      n: '1',
      title: 'Install package',
      description: 'Lightweight — less than 5kb.',
      code: stepOne,
      language: 'jsx' as const,
    },
    {
      n: '2',
      title: 'Add Toaster',
      description: 'Place it at the root level.',
      code: stepTwo,
      language: 'jsx' as const,
    },
    {
      n: '3',
      title: 'Start toasting',
      description: 'Call it from anywhere.',
      code: stepThree,
      language: 'js' as const,
    },
  ];

  return (
    <section className="container py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quick start</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Three steps to notifications</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Install, wrap your app, and show a toast from any component.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="docs-card flex flex-col rounded-xl p-6 transition-shadow hover:shadow-sm">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/60 text-sm font-semibold text-foreground">
              {step.n}
            </div>
            <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
            <p className="mb-4 mt-1 text-sm text-muted-foreground">{step.description}</p>
            <div className="mt-auto w-full">
              <SyntaxHighlighter code={step.code} language={step.language} showCopyButton={false} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToastInstallationCard;
