import { cn } from "../ui/utils";

interface LogoProps {
  size?: "small" | "default" | "large";
  iconOnly?: boolean;
  className?: string;
}

export default function Logo({ size = "default", iconOnly = false, className }: LogoProps) {
  const sizeClasses = {
    small: "h-6",
    default: "h-8", 
    large: "h-12"
  };

  const textSizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg 
        className={cn("flex-shrink-0", sizeClasses[size])}
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Anvil Icon */}
        <rect x="6" y="18" width="20" height="4" rx="1" fill="currentColor"/>
        <rect x="8" y="14" width="16" height="4" rx="1" fill="currentColor"/>
        <rect x="10" y="10" width="12" height="4" rx="1" fill="currentColor"/>
        <rect x="12" y="22" width="8" height="2" rx="1" fill="currentColor"/>
        
        {/* N Letter integrated into anvil design */}
        <rect x="4" y="8" width="2" height="10" fill="currentColor"/>
        <rect x="6" y="12" width="2" height="2" fill="currentColor"/>
        <rect x="8" y="10" width="2" height="2" fill="currentColor"/>
        <rect x="10" y="8" width="2" height="2" fill="currentColor"/>
        <rect x="12" y="8" width="2" height="10" fill="currentColor"/>
      </svg>
      
      {!iconOnly && (
        <span className={cn("font-semibold tracking-tight text-foreground", textSizeClasses[size])}>
          NoteForge
        </span>
      )}
    </div>
  );
}