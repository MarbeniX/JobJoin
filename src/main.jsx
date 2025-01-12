import { createRoot } from "react-dom/client";
import App from "./Pages/App";
import { UserProvider } from "./UserProvider/UserProvider";

const root = createRoot(document.getElementById("root"));

root.render(
        <UserProvider>
            <App />
        </UserProvider>
)