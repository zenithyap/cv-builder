import "../styles/multipleInputs.css";

import trash from "../assets/trash.svg";

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
        <div className="inline-container">
          <legend>{label[0].toUpperCase() + label.slice(1)}</legend>
          <button type='button' onClick={handleAdd}>Add Detail</button>
        </div>
        <ul className='entry-list'>
          {value.map((entry) => {
            return (
              <li key={entry.id}>
                <input
                  id={entry.id}
                  type="text"
                  value={entry.text}
                  onChange={(e) => handleChange(entry.id, e.target.value)}
                />
                <button className='delete-btn' onClick={() => handleDelete(entry.id)}>
                  <img src={trash} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
}
