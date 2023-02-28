import { createElement } from "react";
import { createRoot } from "react-dom/client"

(() => {
  const elm = document.getElementById("root")
  if (!elm) return
  const root = createRoot(elm)

  root.render(createElement("div"))
}
)()