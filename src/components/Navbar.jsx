import ThemeButton from './ThemeButton';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 border-b">
            <h2 className="text-2xl font-bold">Dark Mode Demo</h2>

            <ThemeButton />
        </nav>
    );
}
