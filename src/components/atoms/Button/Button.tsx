import { VariantProps, tv } from "tailwind-variants"
import { twMerge } from "tailwind-merge"
import { ComponentPropsWithRef, ReactNode, forwardRef } from "react"

const button = tv({
    base: "text-white p-4",
    variants: {
        color: {
            primary: "bg-blue-500",
            secondary: "bg-red-500"
        },
        size: {
            small: "text-sm p-2",
            base: "text-base p-4",
            large: "text-lg p-6"
        }
    },
    defaultVariants: {
        color: "primary",
        size: "base"
    }
})

export type ButtonProps = ComponentPropsWithRef<"button"> & VariantProps<typeof button> & { children?: ReactNode }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, children, ...props}, ref) => {

    const buttonClassName = twMerge(button(props), className)

    return (
        <button className={buttonClassName} ref={ref} {...props}>
            {children}
        </button>
    )
})

export default Button