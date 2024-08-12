import { Provider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/Player";
import "./styles/global.css";

export function App() {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  );
}
