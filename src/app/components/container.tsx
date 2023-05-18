import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-4 ${className}`}>
      {children}
    </div>
  );
};
