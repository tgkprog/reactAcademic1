let cnt = 1;
export default function TabButton({ children, onClick, selected }) {
    console.log('TabButton ' + cnt);
    cnt++;
    return (
        <li><button className={selected ? "active" : ''} onClick={onClick}>{children} 
        </button>
        </li>
    );
}