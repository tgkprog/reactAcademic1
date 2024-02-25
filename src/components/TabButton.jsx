let cnt = 1;
export default function TabButton({ children, selected, ...props }) {
  console.log("TabButton " + cnt);
  cnt++;
  return (
    <li>
      <button className={selected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
