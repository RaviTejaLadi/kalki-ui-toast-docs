import { SyntaxHighlighter } from '../common/SyntaxHighLighter/SyntaxHighLighter';

const ToastInstallationCard = () => {
  const stepOne = `npm i kalki-ui-toast`;
  const stepTwo = `
<ToastProvider>
    <App />
    <ToastContainer  />
</ToastProvider>
      `;
  const stepThree = `
addToast({
    message: 'Please check your input',
    variant: 'warning',
    icon: <AlertCircle className="w-5 h-5" />,
})
            `;
  return (
    <div className="px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center  p-6  transition-all duration-300 border dark:border-gray-200/10 rounded-md ">
          <div className="mb-4 transition-transform duration-300">
            <div className="w-10 h-10 border dark:border-gray-200/10 text-primary-foreground rounded-full flex items-center justify-center">
              <div className="text-xl font-bold">1</div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Install package</h2>
          <p className="text-muted-foreground text-sm mb-4">Lightweight - less than 5kb!</p>
          <div className="w-full ">
            <SyntaxHighlighter code={stepOne} language="jsx" showCopyButton={false} />
          </div>
        </div>

        {/* Step 2 */}
        <div className=" flex flex-col items-center  p-6 transition-all duration-300 border dark:border-gray-200/10 rounded-md  ">
          <div className="mb-4 transform  transition-transform duration-300">
            <div className="w-10 h-10 border dark:border-gray-200/10 text-primary-foreground rounded-full flex items-center justify-center">
              <div className="text-xl font-bold">2</div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Add Toaster</h2>
          <p className="text-muted-foreground text-sm mb-4">Place it at the root level</p>
          <div className="w-full ">
            <SyntaxHighlighter code={stepTwo} language="jsx" showCopyButton={false} />
          </div>
        </div>

        {/* Step 3 */}
        <div className=" flex flex-col items-center  p-6  transition-all border dark:border-gray-200/10 rounded-md duration-300 ">
          <div className="mb-4 transform  transition-transform duration-300">
            <div className="w-10 h-10 border dark:border-gray-200/10 text-primary-foreground rounded-full flex items-center justify-center">
              <div className="text-xl font-bold">3</div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Start toasting!</h2>
          <p className="text-muted-foreground text-sm mb-4">Call it from anywhere</p>
          <div className=" w-full ">
            <SyntaxHighlighter code={stepThree} showCopyButton={false} language="js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastInstallationCard;
