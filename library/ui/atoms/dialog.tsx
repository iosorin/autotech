import * as React from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { Icon } from '@ui/atoms/icon';
import { Button, type IButton } from '@ui/atoms/button';
import { cn } from '@utils';

function DialogRoot({ ...props }: React.ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot='dialog' {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof Primitive.Trigger>) {
  return <Primitive.Trigger data-slot='dialog-trigger' {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof Primitive.Portal>) {
  return <Primitive.Portal data-slot='dialog-portal' {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof Primitive.Close>) {
  return <Primitive.Close data-slot='dialog-close' {...props} />;
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof Primitive.Overlay>) {
  return (
    <Primitive.Overlay
      data-slot='dialog-overlay'
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/45',
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <Primitive.Content
        data-slot='dialog-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid  min-w-[40vw] min-h-[40vh] max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-10 shadow-lg duration-200 max-h-[90vh] overflow-auto scrollbar',
          className
        )}
        {...props}
      >
        {children}
        <Primitive.Close className="data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-3 right-3 rounded-xs opacity-70 transition-opacity hover:opacity-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <Icon type='close' className='size-6' />
          <span className='sr-only'>Close</span>
        </Primitive.Close>
      </Primitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-header'
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='dialog-footer'
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof Primitive.Title>) {
  return (
    <Primitive.Title
      data-slot='dialog-title'
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Description>) {
  return (
    <Primitive.Description
      data-slot='dialog-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

type Props = React.ComponentProps<typeof Primitive.Root> & {
  title?: string;
  description?: string;
  submit?: IButton;
  cancel?: IButton;
  onSubmit?: () => void;
  onCancel?: () => void;
};

function usePromise() {
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const run = React.useCallback((fn?: () => any) => {
    return () => {
      setLoading(true);
      setDisabled(true);

      const result = fn?.();

      if (result.then) {
        result.finally(() => {
          setLoading(false);
          setDisabled(false);
        });
      } else {
        setLoading(false);
        setDisabled(false);
      }
      return result;
    };
  }, []);

  return { loading, disabled, run };
}

function Dialog({
  title,
  description,
  submit,
  cancel,
  onSubmit,
  onCancel,
  children,
  ...props
}: Props) {
  const buttons = [submit, cancel].filter(Boolean);
  const submitPromise = usePromise();
  const cancelPromise = usePromise();
  const disabled = cancelPromise.disabled || submitPromise.disabled;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onCancel?.();
    }

    props.onOpenChange?.(open);
  };

  return (
    <Primitive.Root data-slot='dialog' onOpenChange={handleOpenChange} {...props}>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription className='whitespace-pre-line'>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}

        {buttons && buttons.length > 0 && (
          <DialogFooter>
            {cancel && (
              <Button
                variant='outline'
                {...cancel}
                // loading={cancelPromise.loading}
                disabled={disabled}
                onClick={cancelPromise.run(onCancel)}
              />
            )}

            {submit && (
              <Button
                {...submit}
                // loading={submitPromise.loading}
                disabled={disabled}
                onClick={submitPromise.run(onSubmit)}
              />
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Primitive.Root>
  );
}

Dialog.Root = DialogRoot;
Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export type { Props as IDialog };
export { Dialog }
export default Dialog;
