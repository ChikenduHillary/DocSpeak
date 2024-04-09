import { cn } from "@/lib/utils";
import { FunctionComponent, ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper: FunctionComponent<MaxWidthWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
