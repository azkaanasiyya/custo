interface HeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export default function Header({ title, description, className = "" }: HeaderProps) {
    return (
        <div className={`flex flex-col justify-center items-center gap-[1rem] ${className}`}>
            <div className="typography font-semibold text-grayscale-950">
                <h3>{title}</h3>
            </div>
            {description && (
                <p className="text-xlarge text-grayscale-600">{description}</p>
            )}
        </div>
    )
}