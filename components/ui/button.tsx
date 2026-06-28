import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    
    let variantStyles = "";
    switch (variant) {
      case "default":
        variantStyles = "bg-primary text-white hover:bg-primary-hover shadow-sm";
        break;
      case "outline":
        variantStyles = "border border-primary text-primary bg-transparent hover:bg-muted";
        break;
      case "secondary":
        variantStyles = "bg-secondary text-white hover:bg-secondary-hover shadow-sm";
        break;
      case "ghost":
        variantStyles = "hover:bg-muted hover:text-foreground";
        break;
      case "link":
        variantStyles = "text-primary underline-offset-4 hover:underline";
        break;
    }

    let sizeStyles = "";
    switch (size) {
      case "default":
        sizeStyles = "h-10 px-4 py-2";
        break;
      case "sm":
        sizeStyles = "h-9 rounded-full px-4 text-sm";
        break;
      case "lg":
        sizeStyles = "h-11 rounded-full px-8";
        break;
      case "icon":
        sizeStyles = "h-10 w-10 rounded-full";
        break;
    }

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles} ${sizeStyles} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
