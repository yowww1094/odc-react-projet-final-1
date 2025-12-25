
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      className={`tab-button ${isSelected ? "active" : ""}`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
