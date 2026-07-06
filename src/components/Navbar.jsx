import { useTheme } from '../context/ThemeContext';
import ThemeButton from './ThemeButton';

export default function Navbar() {
    const { theme } = useTheme();

    return (
        <nav className="flex justify-between items-center p-5 border-b">
            <h2 className="text-2xl font-bold">{theme === 'dark' ? 'Dark Mode Demo' : 'Light Mode Demo'}</h2>

            <ThemeButton />
        </nav>
    );
}
