import reactLogo from './assets/react.svg';
import './App.css';

function App() {
    return (
        <>
            <Header />
        </>
    );
}

export default App;

export function Header() {
    return (
        <>
            <header>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
                <h1>React Essentials</h1>
                <p>
                    These are{' '}
                    {reactDescriptions[genRandomInt(reactDescriptions.length)]}{' '}
                    <a href="https://react.dev" target="_blank">
                        React
                    </a>{' '}
                    concepts you will need for almost any app you are going to
                    build!{' '}
                </p>
            </header>
        </>
    );
}

const reactDescriptions = ['fundamental', 'crucial', 'core'];

function genRandomInt(max: number) {
    const randomInteger = Math.floor(Math.random() * max);
    return randomInteger;
}
