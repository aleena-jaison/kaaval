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
        variantStyles = "bg-yellow-400 text-slate-900 hover:bg-yellow-500 shadow-md shadow-yellow-400/20 border border-yellow-500/20 font-bold hover:-translate-y-0.5 transition-transform";
        break;
      case "outline":
        variantStyles = "border-2 border-slate-200 text-slate-700 bg-transparent hover:bg-slate-50 hover:border-yellow-400 font-bold";
        break;
      case "secondary":
        variantStyles = "bg-slate-900 text-white hover:bg-slate-800 shadow-md font-bold";
        break;
      case "ghost":
        variantStyles = "hover:bg-yellow-50 hover:text-slate-900 text-slate-600 font-bold transition-colors";
        break;
      case "link":
        variantStyles = "text-yellow-600 underline-offset-4 hover:underline font-bold";
        break;
    }

    let sizeStyles = "";
    switch (size) {
      case "default":
        sizeStyles = "h-11 px-5 py-2";
        break;
      case "sm":
        sizeStyles = "h-9 px-4 text-sm";
        break;
      case "lg":
        sizeStyles = "h-14 px-8 text-lg";
        break;
      case "icon":
        sizeStyles = "h-10 w-10";
        break;
    }

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles} ${sizeStyles} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
