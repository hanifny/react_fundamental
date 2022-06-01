import { tdlData } from "./tdlData";
import ToDoList from "./pages/ToDoList/ToDoList";

function App() {
	return <ToDoList tdlData={tdlData} />;
}

export default App;
