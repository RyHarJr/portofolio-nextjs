import Header from "./views/navbar";
import MainView from "./views/main";
import About from "./views/about";
import Skills from "./views/skills";

export default function Home() {
    return (
        <>
        <Header />
        <MainView />
        <About />
        <Skills />
        </>
    );
}