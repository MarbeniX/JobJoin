import { createRoot } from "react-dom/client";
import App from "./Pages/App";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
        <div>
            <App />
        </div>
)