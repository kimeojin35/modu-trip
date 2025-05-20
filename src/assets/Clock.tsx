import { IconProps } from ".";

export const Clock = ({ size = 24, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 7v5h5m-5 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      />
    </svg>
  );
};
