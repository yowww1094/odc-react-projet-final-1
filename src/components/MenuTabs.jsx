import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

export default function MenuTabs() {
  const [selected, setSelected] = useState("components");

  return (
    <>
     <h1> Examples</h1>
    <div>
      {EXAMPLES.map(example => (
        <TabButton
          key={example.id}
          isSelected={selected === example.id}
          onSelect={() => setSelected(example.id)}
        >
          {example.title}
        </TabButton>
      ))}

      
      <div className="tab-content">
        <h2>{EXAMPLES.find(e => e.id === selected).title}</h2>
        <p>{EXAMPLES.find(e => e.id === selected).description}</p>
        <pre>
          <code>
            {EXAMPLES.find(e => e.id === selected).code}
          </code>
        </pre>
      </div>
    </div>
    </>
   
  );
}
