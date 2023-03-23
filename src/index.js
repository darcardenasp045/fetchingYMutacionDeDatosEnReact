import { createRoot } from "react-dom/client";

import App from "./App";

const notas = [
  {
    id: 1,
    date: new Date().toISOString(),
    content: "Sports",
    important: false
  },
  {
    id: 2,
    date: new Date().toISOString(),
    content: "Renders",
    important: true
  },
  {
    id: 3,
    date: new Date().toISOString(),
    content: "Computers",
    important: true
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notas={notas} />);
