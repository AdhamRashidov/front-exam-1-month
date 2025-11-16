import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  onClick,
  type = "button",
  ...props
}) => {
  const variants = {
    primary:"text-smoke bg-primary font-medium hover:bg-primary/90",
    outline:"border border-primary text-primary hover:bg-primary hover:text-white",
    yellow: "bg-yellow text-primary font-medium hover:bg-yellow/80",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-[8px]",
    md: "px-[39px] py-[25px] text-base",
    lg: "px-[50px] py-[25px] text-lg",
    xl: "px-[85px] py-[30px] text-[25px]",
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-primary font-semibold
    rounded-2xl
    transition-all duration-200
	cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}`;

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      {...props}>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
