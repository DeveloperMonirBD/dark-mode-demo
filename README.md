# 🌙 React Dark/Light Mode Setup

A beginner-friendly example of implementing **Dark Mode** and **Light Mode** using:

- ⚛️ React
- 🎨 Tailwind CSS
- 📦 Context API
- 💾 localStorage

---

# 📂 Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── ThemeButton.jsx
│   └── Card.jsx
│
├── context
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Installation

```bash
npm create vite@latest dark-mode-demo
```

```bash
cd dark-mode-demo
```

```bash
npm install
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Start the project:

```bash
npm run dev
```

---

# 🧠 How It Works

```
Application Starts
        │
        ▼
Check localStorage
        │
        ▼
Theme Found?
   │          │
 Yes         No
 │            │
 ▼            ▼
Use Saved   Check System Theme
Theme       (Dark / Light)
      │
      ▼
Set Initial Theme
      │
      ▼
Render Application
```

---

# 📦 ThemeContext

The `ThemeProvider` is responsible for:

- Managing the current theme
- Saving the theme in localStorage
- Updating the HTML element
- Providing the theme to all components

---

# 🔄 Theme Flow

```
Button Click
      │
      ▼
toggleTheme()
      │
      ▼
setTheme()
      │
      ▼
theme State Changes
      │
      ▼
useEffect()
      │
      ▼
Update HTML Class
      │
      ▼
Save Theme
      │
      ▼
UI Re-renders
```

---

# 🎯 Context API Flow

```
ThemeProvider
      │
      ▼
ThemeContext
      │
      ▼
useTheme()
      │
      ▼
Any Component
```

---

# 📌 Theme Provider

```jsx
<ThemeProvider>
    <App />
</ThemeProvider>
```

---

# 📌 Using the Custom Hook

```jsx
import { useTheme } from "../context/ThemeContext";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
    );
}
```

---

# 💡 Why Create `useTheme()`?

Instead of writing this everywhere:

```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

Create a custom hook:

```jsx
export function useTheme() {
    return useContext(ThemeContext);
}
```

Now you only write:

```jsx
const { theme, toggleTheme } = useTheme();
```

Benefits:

- Cleaner code
- Less repetition
- Easier maintenance
- Better readability

---

# 💾 localStorage

Save theme:

```js
localStorage.setItem("theme", theme);
```

Read theme:

```js
const saved = localStorage.getItem("theme");
```

---

# 🌗 Toggle Logic

```js
const toggleTheme = () => {
    setTheme((prev) =>
        prev === "light" ? "dark" : "light"
    );
};
```

---

# 🎨 Update HTML Class

Recommended:

```js
useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
}, [theme]);
```

Avoid:

```js
document.documentElement.className = theme;
```

because it removes every existing class from the `<html>` element.

---

# 🌈 Tailwind Example

```jsx
<div className="
bg-white
text-black
dark:bg-gray-900
dark:text-white
transition-all
duration-300
">
    Hello World
</div>
```

---

# 📚 Concepts Learned

- React Context API
- createContext()
- useContext()
- Custom Hooks
- useState()
- useEffect()
- localStorage
- Theme Toggle
- Tailwind Dark Mode
- Component Communication
- React Project Structure

---

# ✅ Features

- 🌞 Light Mode
- 🌙 Dark Mode
- 💾 Persistent Theme
- ⚛️ Context API
- 🎨 Tailwind CSS
- ⚡ React Hooks
- 📱 Responsive UI

---

# 📝 License

This project is free to use for learning and educational purposes.

---

## 👨‍💻 Author

**Md. Moniruzzaman Monir**


