import GlobalProvider from "./contexts/global";
import Routes from "./routes";

export default function App() {
  return (
    <GlobalProvider>

      <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
      <div className="container">
        <Routes />
      </div>
    </GlobalProvider>
  );
}