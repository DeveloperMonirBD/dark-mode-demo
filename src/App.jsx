import Card from './components/Card';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <div
            className="
      min-h-screen
      bg-gray-100
      text-black

      dark:bg-gray-900
      dark:text-white

      transition-all
      duration-300
    ">
            <Navbar />

            <div className="flex justify-center items-center mt-20">
                <Card />
            </div>
        </div>
    );
}
