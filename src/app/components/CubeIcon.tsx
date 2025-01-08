export function CubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16 2L4 9V23L16 30L28 23V9L16 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M4 9L16 16L28 9" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M16 16V30" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </svg>
  );
} 