import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

export default function MenuTabs() {
  const [selected, setSelected] = useState(null); 

  const selectedExample = EXAMPLES.find((e) => e.id === selected);

  return (
    <>
      <h1>Examples</h1>

      <div>
        {EXAMPLES.map((example) => (
          <TabButton
            key={example.id}
            isSelected={selected === example.id}
            onSelect={() => setSelected(example.id)}
          >
            {example.title}
          </TabButton>
        ))}
      </div>

      {selected
        ? selectedExample && (
            <div className="tab-content">
              <h2>{selectedExample.title}</h2>
              <p>{selectedExample.description}</p>
              <pre>
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          )
        : <h1>Pleas select a topic </h1>}
    </>
  );
}
