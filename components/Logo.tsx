export default function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12", 
    large: "w-16 h-16"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Letter N */}
          <path 
            d="M8 12V36H12V20.8L28 36H32V12H28V27.2L12 12H8Z" 
            fill="currentColor"
          />
          
          {/* Anvil Icon */}
          <g transform="translate(34, 8)">
            {/* Anvil base */}
            <rect x="0" y="24" width="12" height="4" rx="1" fill="currentColor"/>
            
            {/* Anvil body */}
            <path 
              d="M1 16H11C11.5523 16 12 16.4477 12 17V23C12 23.5523 11.5523 24 11 24H1C0.447715 24 0 23.5523 0 23V17C0 16.4477 0.447715 16 1 16Z" 
              fill="currentColor"
            />
            
            {/* Anvil horn */}
            <path 
              d="M9 12H11C11.5523 12 12 12.4477 12 13V16H9V12Z" 
              fill="currentColor"
            />
            
            {/* Anvil hardy hole */}
            <circle cx="3" cy="20" r="1" fill="white"/>
          </g>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold leading-none tracking-tight">NoteForge</span>
        {size === "large" && (
          <span className="mt-1 text-xs leading-none text-muted-foreground">Productivity App</span>
        )}
      </div>
    </div>
  );
}

export function LogoIcon({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Letter N */}
        <path 
          d="M8 12V36H12V20.8L28 36H32V12H28V27.2L12 12H8Z" 
          fill="currentColor"
        />
        
        {/* Anvil Icon */}
        <g transform="translate(34, 8)">
          {/* Anvil base */}
          <rect x="0" y="24" width="12" height="4" rx="1" fill="currentColor"/>
          
          {/* Anvil body */}
          <path 
            d="M1 16H11C11.5523 16 12 16.4477 12 17V23C12 23.5523 11.5523 24 11 24H1C0.447715 24 0 23.5523 0 23V17C0 16.4477 0.447715 16 1 16Z" 
            fill="currentColor"
          />
          
          {/* Anvil horn */}
          <path 
            d="M9 12H11C11.5523 12 12 12.4477 12 13V16H9V12Z" 
            fill="currentColor"
          />
          
          {/* Anvil hardy hole */}
          <circle cx="3" cy="20" r="1" fill="white"/>
        </g>
      </svg>
    </div>
  );
}