import Navigation from "../components/Navigation";

export default function HomePage() {
    return (
        <Navigation>
            <div className="flex flex-col lg:flex-row justify-between items-center pb-10 md:pb-0">
                <div className="w-8/12">
                    <h1 className="text-5xl flex flex-wrap">
                        Hi there, <span>I’m Saúl👋</span>
                    </h1>
                    <p className="text-lg mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada
                        nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="text-lg mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada
                        nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                    </p>
                </div>
                <div className="mt-10 lg:mt-0 w-full">
                    <img className="w-5/12 lg:w-7/12 mx-auto lg:mr-1" src="/yo.png" />
                </div>
            </div>
        </Navigation>
    );
}
