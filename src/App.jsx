import Welcome from "./component/welcome";
import Hello from "./component/hello";
import ClickNumber from "./component/click";
import ClassList from "./component/list";
function App() {
  return (
    <div className="bg-black w-2/5 mx-auto max-h-screen my-6 p-5">
      <Welcome />
      <Hello />
      <ClickNumber/>
      <ClassList/>
    </div>
  );
}

export default App; 
