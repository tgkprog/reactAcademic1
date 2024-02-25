export default function Section({ title, children, ...props }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
