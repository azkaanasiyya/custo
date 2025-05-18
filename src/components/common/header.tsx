interface HeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export default function Header({ title, description, className = "" }: HeaderProps) {
    return (
        <div className={`flex flex-col justify-center items-center gap-4 ${className}`}>
            <div className="typography font-semibold text-grayscale-950">
                <h3 className="text-[28px] leading-[140%] md:text-[40px] md:leading-[120%]">
                    {title}
                </h3>
            </div>
            {description && (
                <p className="text-[16px] leading-[160%] text-grayscale-600 md:text-xlarge">
                    {description}
                </p>
            )}
        </div>
    )
}