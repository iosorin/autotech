import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@utils'

const buttonVariants = cva(
  'button',
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
        lg: 'h-14 px-6 text-lg',
        xl: 'h-14 rounded-full px-8 text-lg [&_svg]:size-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
