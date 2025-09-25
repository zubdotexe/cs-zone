
import Navbar from './components/Navbar/Navbar';
import './Hero.css';
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className='bg-[#F5F5F5]'>
            <header>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
        </div>
    );
}

export default App;
