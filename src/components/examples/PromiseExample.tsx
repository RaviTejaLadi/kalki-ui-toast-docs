import { toast } from 'kalki-ui-toast';
import { Button } from 'kalki-ui';
import { Loader } from 'lucide-react';
import { ExampleCard } from '../ui/ExampleCard';

const fakeSave = (shouldFail = false) =>
  new Promise<{ id: string }>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('Network error'));
      else resolve({ id: 'profile-42' });
    }, 1800);
  });

const PromiseExample = () => {
  return (
    <ExampleCard
      icon={<Loader className="h-4 w-4" />}
      accent="sky"
      title="Promise and loading"
      description="One toast updates in place from loading to success or error."
    >
      <Button
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
            });
          }, 2000);
        }}
      >
        Loading → update
      </Button>
    </ExampleCard>
  );
};

export default PromiseExample;
