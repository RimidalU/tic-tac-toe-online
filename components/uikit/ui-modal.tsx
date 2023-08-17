import clsx from "clsx";

/**
 *
 * @param {{
 *   className: string
 *   width: "md" | "full";
 * }} props
 *
 */

export function UiModal({
  width = "md",
  className,
}: {
  width: string;
  className?: string;
}) {
  return (
    <div className="fixed inset-0 bg-slate-600/60 backdrop-blur-sm py-10">
      <div
        className={clsx(
          "bg-orange-50 rounded-lg min-h-[320px] mx-auto relative",
          className,
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button className="text-indigo-600 hover:text-lime-400 transition-colors">
          <CloseCrossIcon className="w-12 h-12 absolute top-0 left-[calc(100%+12px)]" />
        </button>
      </div>
    </div>
  );
}

function CloseCrossIcon({ className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"
        fill="#fbbf24"
      />
      <path
        d="M11.76,21.24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l8.49-8.49A1,1,0,0,1,21,12.46L12.46,21A1,1,0,0,1,11.76,21.24Z"
        fill="currentColor"
      />
      <path
        d="M20.24,21.24a1,1,0,0,1-.7-.29l-8.49-8.49a1,1,0,0,1,1.41-1.41L21,19.54A1,1,0,0,1,21,21,1,1,0,0,1,20.24,21.24Z"
        fill="currentColor"
      />
    </svg>
  );
}
