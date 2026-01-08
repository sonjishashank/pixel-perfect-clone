interface StarsetLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

const StarsetLogo = ({ className = "", size = 40, color = "currentColor" }: StarsetLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized S shape made of geometric elements */}
      <path
        d="M20 4L32 12V20L20 28L8 20V12L20 4Z"
        fill={color}
      />
      <path
        d="M20 12L32 20V28L20 36L8 28V20L20 12Z"
        fill={color}
        opacity="0.7"
      />
      <path
        d="M14 8L20 4L26 8L20 12L14 8Z"
        fill={color}
      />
      <path
        d="M14 32L20 28L26 32L20 36L14 32Z"
        fill={color}
      />
    </svg>
  );
};

export default StarsetLogo;
