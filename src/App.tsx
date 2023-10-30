import { HvAppShell } from "@hitachivantara/app-shell";

function App() {
  return (
    <div>
      <HvAppShell configUrl={`${document.baseURI}app-shell.config.json`} />
    </div>
  );
}

export default App;
