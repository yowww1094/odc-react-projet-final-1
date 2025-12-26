import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header';
import MenuTabs from "./components/MenuTabs";

function App() {
  return (
    <>
      <Header />
      <div className="cores">
        <h1>Core Concept</h1>
        <div className="core"> 

          {/* first methode  */}
          {CORE_CONCEPTS.map((core) => (
          <CoreConcept title={core.title} description={core.description} image={core.image} />
          ) )}

          {/* second methode  */}
          {/* <CoreConcept title={CORE_CONCEPTS[0].title}  Description={CORE_CONCEPTS[0].description} Image={CORE_CONCEPTS[0].image}/> 
            <CoreConcept title={CORE_CONCEPTS[1].title}  Description={CORE_CONCEPTS[1].description} Image={CORE_CONCEPTS[1].image}/> 
                <CoreConcept title={CORE_CONCEPTS[2].title}  Description={CORE_CONCEPTS[2].description} Image={CORE_CONCEPTS[2].image}/> 

          <CoreConcept title={CORE_CONCEPTS[3].title}  Description={CORE_CONCEPTS[3].description} Image={CORE_CONCEPTS[3].image}/>  */}

          {/* 3ed Methode  */}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} /> 
          <CoreConcept {...CORE_CONCEPTS[1]} /> 
          <CoreConcept {...CORE_CONCEPTS[2]} /> 
          <CoreConcept {...CORE_CONCEPTS[3]} />  */}

        </div>
      </div>
   
      <MenuTabs />
    </>
);


}

export default App;