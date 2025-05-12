import { IconProps } from ".";

export const Calendar = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 37 36"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6.333 12h24m-24 0v13.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C8.612 30 9.451 30 11.13 30h14.409c1.677 0 2.515 0 3.157-.327a3.003 3.003 0 0 0 1.312-1.311c.326-.641.326-1.48.326-3.157V12m-24 0v-1.2c0-1.68 0-2.52.327-3.162a2.998 2.998 0 0 1 1.311-1.311C8.613 6 9.454 6 11.134 6h1.2m18 6v-1.205c0-1.677 0-2.516-.327-3.157a3.002 3.002 0 0 0-1.313-1.311C28.053 6 27.215 6 25.535 6h-1.2m0-3v3m0 0h-12m0-3v3"
      />
    </svg>
  );
};
