import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@utils'
import { Icon } from '@ui/atoms/icon'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4.5 [&_svg]:shrink-0 transition duration-200',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-85',
        destructive:
          'bg-destructive text-destructive-foreground hover:opacity-85',
        outline:
          'border border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:opacity-85',
        accent:
          'bg-accent text-accent-foreground hover:opacity-85',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-3.5 py-2',
        sm: 'h-9 px-3',
        lg: 'h-[62px] px-[26px] text-[22px]',
        xl: 'h-14 rounded-full px-8 text-lg [&_svg]:size-6',
        icon: 'h-10 w-10',
      },
      readonly: {
        true: "pointer-events-none user-select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface IButton
  extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label?: string;
  icon?: React.ComponentProps<typeof Icon>;
  readonly?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ({ className, variant, size, asChild = false, label, icon, children, readonly = false, ...props }, ref) => {
    const commonProps = {
      className: cn(buttonVariants({ variant, size, readonly, className })),
      ref,
      ...props,
    }
    if (asChild) return <Slot {...commonProps}>{children}</Slot>;

    return <button {...commonProps}>
      <Icon {...icon} />
      {label}
      {children}
    </button>;
  },
);

Button.displayName = 'Button'

export { Button, buttonVariants }
