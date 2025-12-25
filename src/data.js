// Import des images
import componentsImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/props.png';
import stateImg from './assets/state.png';

// =======================
// Concepts de base
// =======================
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description: "Les composants permettent de découper l’interface en éléments réutilisables."
  },
  {
    image: jsxImg,
    title: "JSX",
    description: "JSX permet d’écrire du HTML directement dans le code JavaScript."
  },
  {
    image: propsImg,
    title: "Props",
    description: "Les props servent à transmettre des données d’un composant parent à un composant enfant."
  },
  {
    image: stateImg,
    title: "State",
    description: "Le state permet de gérer les données dynamiques d’un composant."
  }
];

// =======================
// Exemples
// =======================
export const EXAMPLES = [
  {
    id: "components",
    title: "Composants",
    description: "Un composant React est une fonction qui retourne du JSX.",
    code: `
function Welcome() {
  return <h1>Bonjour React</h1>;
}
`
  },
  {
    id: "jsx",
    title: "JSX",
    description: "JSX mélange JavaScript et HTML pour créer l’interface.",
    code: `
const element = <h1>Hello, world!</h1>;
`
  },
  {
    id: "props",
    title: "Props",
    description: "Les props permettent de rendre un composant configurable.",
    code: `
function Greeting(props) {
  return <h2>Bonjour {props.name}</h2>;
}
`
  },
  {
    id: "state",
    title: "State",
    description: "Le state permet de modifier l’affichage selon les interactions.",
    code: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur : {count}
    </button>
  );
}
`
  }
];