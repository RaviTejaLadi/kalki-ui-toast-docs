import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';

const fakeSave = (shouldFail = false) =>
  new Promise<{ id: string }>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('Network error'));
      else resolve({ id: 'profile-42' });
    }, 1800);
  });

const PromiseExample = () => {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-foreground">Promise and loading</h3>
      <p className="mb-4 text-sm text-muted-foreground">One toast updates in place from loading to success or error.</p>
      <div className="space-y-3">
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast.promise(fakeSave(), {
              loading: 'Saving profile…',
              success: (data) => `Saved ${data.id}`,
              error: 'Could not save profile',
            })
          }
        >
          Promise success
        </Button>
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() =>
            toast.promise(fakeSave(true), {
              loading: 'Saving profile…',
              success: 'Saved',
              error: (err) => (err instanceof Error ? err.message : 'Unknown error'),
            })
          }
        >
          Promise error
        </Button>
        <Button
          block
          variant="outline"
          size="xs"
          onClick={() => {
            const id = toast.loading('Uploading photo…');
            setTimeout(() => {
              toast.update(id, {
                variant: 'success',
                title: 'Upload complete',
                description: 'avatar.png is ready.',
                duration: 4000,
                showProgress: true,
              });
            }, 2000);
          }}
        >
          Loading → update
        </Button>
      </div>
    </div>
  );
};

export default PromiseExample;
