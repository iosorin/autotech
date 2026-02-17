'use client';
import React from 'react';
import { app, forms } from '@/data';
import { Dialog } from '@ui/atoms/dialog';
import Form, { type IForm } from '@ui/blocks/form';
import { Sonner } from "@ui/atoms/sonner";
import { useObserve } from '@hooks/use-observe';
import contact from '@api/contact';

export const Use = ({ children }: { children?: React.ReactNode }) => {
    const [dialog, setDialog] = React.useState<{ id: string; form: IForm } | null>(null);

    useObserve({
        selector: '.animate:not(.animate-visible)',
        activeClass: 'animate-visible'
    });

    React.useEffect(() => {
        document.body.classList.add('mounted');

        const handler = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('[id]');
            if (!target) return;

            const id = target.getAttribute('id');
            onAction(id);
        };

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);


    const onAction = React.useCallback((id: string | null) => {
        if (!id) return;

        switch (id) {
            case app.cta.contact.id:
                setDialog({ id: forms.contact.id, form: forms.contact });
                break;
        }
    }, []);

    return <>
        {children}
        {dialog &&
            <Dialog.Root open={!!dialog.id} onOpenChange={() => setDialog(null)}>
                <Dialog.Content>
                    <Dialog.Title className="sr-only">{dialog.form?.heading}</Dialog.Title>
                    <Form id={dialog.id} heading={dialog.form?.heading} fields={dialog.form?.fields} className='shadow-none !p-0' onSubmit={contact} />
                </Dialog.Content>
            </Dialog.Root>
        }
        <Sonner />
    </>
}
export default Use;