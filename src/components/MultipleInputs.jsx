export default function MultipleInputs({
  label,
  value,
  handleAddDetail,
	handleDeleteDetail,
  handleDetailChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        <button onClick={handleAddDetail}>Add Detail</button>
        <ul>
          {value.map((entry) => {
            return (
              <li key={entry.id}>
                <input
                  type="text"
                  value={entry.text}
                  onChange={(e) => handleDetailChange(entry.id, e.target.value)}
                />
								<button onClick={() => handleDeleteDetail(entry.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
}
