export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>🚀 Start adding some item in packing list</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedItemsPercent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        <em>
          {packedItemsPercent !== 100
            ? ` 💼 You have ${numItems} items on your list, and you already packed
            ${packedItems} (${packedItemsPercent}%)`
            : "You got everything! Ready to go✈️"}
        </em>
      </p>
    </footer>
  );
}
