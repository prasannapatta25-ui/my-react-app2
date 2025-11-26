import PropsExample from "./components/Propsexample.jsx";
import StateExample from "./components/Stateexample.jsx";
import EffectExample from "./components/Effectexample.jsx";
import EventExample from "./components/Eventexample.jsx";
import ConditionalExample from "./components/ConditionalExample.jsx";
import ListExample from "./components/Listexample.jsx";
import FormExample from "./components/Formexample.jsx";
import StylingExample from "./components/Stylingexample.jsx";
import CompositionExample from "./components/Compositionexample.jsx";

function App() {
  return (
    <div>
      <PropsExample name="Prassu" age={24} />
      <StateExample />
      <EffectExample />
      <EventExample />
      <ConditionalExample />
      <ListExample />
      <FormExample />
      <StylingExample />
      <CompositionExample />
    </div>
  );
}

export default App;

