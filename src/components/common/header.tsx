interface HeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export default function Header({ title, description, className = "" }: HeaderProps) {
    return (
        <div className={`flex flex-col justify-center items-center gap-4 ${className}`}>
                <h2 className="font-sans text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold leading-[140%] text-center text-gray-950">
                    {title}
                </h2>
            {description && (
                <p className="text-[1rem] md:text-[1.125rem] leading-[160%] text-grayscale-600 text-center">
                    {description}
                </p>
            )}
        </div>
    )
}