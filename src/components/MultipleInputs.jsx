export default function MultipleInputs({
  label,
  value,
  data,
  setData,
  parentId,
}) {
  function handleAdd() {
    setData((prev) =>
      prev.map((item) =>
        item.id === parentId
          ? {
              ...item,
              [label]: [
                ...item[label],
                {
                  id: crypto.randomUUID(),
                  text: "",
                },
              ],
            }
          : item
      )
    );
  }

  function handleDelete(detailId) {
    setData((prev) =>
      prev.map((item) =>
        item.id === parentId
          ? {
              ...item,
              details: item.details.filter((detail) => detail.id != detailId),
            }
          : item
      )
    );
  }

  function handleChange(detailId, value) {
    setData((prev) =>
      prev.map((item) =>
        item.id === parentId
          ? {
              ...item,
              details: item.details.map((detail) =>
                detail.id === detailId ? { ...detail, text: value } : detail
              ),
            }
          : item
      )
    );
  }

  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        <button type='button' onClick={handleAdd}>Add Detail</button>
        <ul>
          {value.map((entry) => {
            return (
              <li key={entry.id}>
                <input
                  id={entry.id}
                  type="text"
                  value={entry.text}
                  onChange={(e) => handleChange(entry.id, e.target.value)}
                />
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
}
