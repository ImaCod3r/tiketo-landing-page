import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Organizers from "../components/Organizers";

function Home() {
    return (
        <>
            <header className="w-full flex flex-col">
                <NavBar />
                <Hero />
            </header>
            <main>
                <About />
                <div id="line" />
                <HowItWorks />
                <div id="line" />
                <Organizers />
            </main>
        </>
    )
}

export default Home;