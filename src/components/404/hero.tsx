import { Button } from "../ui/button";

export default function Hero404() {
    return (
        <div className="hero-section bg-[url('/background/bg-404.png')] bg-no-repeat bg-center pt-[258px] pb-[178px] px-24 flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-12">
                <div className="header flex flex-col justify-center items-center gap-4">
                    <div className="typography text-grayscale-950">
                        <h1>Oops! Page Not Found</h1>
                    </div>
                    <p className="text-xlarge text-grayscale-600">The page you are looking for doesn’t exist. Click button below to go to the homepage.</p>
                </div>
                <Button variant="Secondary" size="base">Go to Home page</Button>
            </div>
        </div>
    )
}