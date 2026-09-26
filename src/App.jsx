import { LogInPage } from "./pages/logIn/LogInPage.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <LogInPage />
    </UserContextProvider>
  );
}

export default App;
