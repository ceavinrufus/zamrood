import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
};
