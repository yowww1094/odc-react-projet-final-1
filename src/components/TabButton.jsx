export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      onClick={onSelect}
      className={`tab-button ${isSelected ? "active" : ""}`}
    >
      {children}
    </button>
  );
}
