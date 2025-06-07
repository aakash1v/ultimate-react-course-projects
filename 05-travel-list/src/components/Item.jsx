export default function Item({ item, handleRemoveItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.quantity}</span>
      <span
        style={item.packed === true ? { textDecoration: "line-through" } : {}}
      >
        {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </li>
  );
}
