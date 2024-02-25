import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <main>
        <h2>Time to get started!</h2>
      </main>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
