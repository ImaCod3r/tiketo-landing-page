import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";

function Home() {
    return (
        <>
            <header className="w-full flex flex-col">
                <NavBar />
                <Hero />
            </header>
            <main>
                <About />
            </main>
        </>
    )
}

export default Home;