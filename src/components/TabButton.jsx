let cnt = 1;
export default function TabButton({ children, onClick, selBtn }) {
    console.log('TabButton ' + cnt);
    cnt++;
    return (
        <li><button onClick={onClick}>{children} 
        </button>
        </li>
    );
}