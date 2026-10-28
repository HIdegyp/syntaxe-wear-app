interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
}

export const Button = ({ children, variant = "primary", size = "md" }: ButtonProps) => {

    const buttonStyle = {
        base: "flex justify-center items-center gap-2 text-nowrap leading-none houver:pointer transitioin-colors duration--200 font-medium rounded-full py-2.5 ",
        variant: {
            primary: "bg-white text-[#6329a2] hover:bg-gray-100",
            secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-[#6329a2]"
        },
        size: {
            sm: "px-5",
            md: "px-8",
            lg: "px-10"
        },
    }
  const className = `${buttonStyle.base} ${buttonStyle.variant[variant]} ${buttonStyle.size[size]}` ;
    return (
        <button className={className}>{children}</button>
    )
}