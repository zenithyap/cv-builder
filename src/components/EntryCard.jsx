import Input from "./Input";
import MultipleInputs from "./MultipleInputs";

export default function EntryCard({
  entries,
  setEntries,
  entryFields,
}) {
  function handleAdd() {
    setEntries((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...Object.fromEntries(
          entryFields.map(({ label, type }) => [
            label,
            type === "array" ? [] : "",
          ])
        ),
      },
    ]);
  }

  function handleDelete(id) {
    setEntries(entries.filter((e) => e.id != id));
  }

  function handleChange(id, key, value) {
    setEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  }
  return (
    <>
      <div className="entry-card-container">
        {entries.map((entry) => {
          const onChange = (key, value) => handleChange(entry.id, key, value);

          return (
            <form key={entry.id} className="entry-card">
              {entryFields.map((field) => {
                if (field.type === "array") {
                  return (
                    <MultipleInputs
                      key={field.label}
                      label={field.label}
                      value={entry[field.label]}
                      data={entries}
                      setData={setEntries}
                      parentId={entry.id}
                    />
                  );
                } else {
                  return (
                    <Input
                      key={field.label}
                      label={field.label}
                      type={field.type}
                      value={entry[field.label]}
                      handleChange={onChange}
                    />
                  );
                }
              })}
              <button onClick={() => handleDelete(entry.id)}>Delete</button>
            </form>
          );
        })}
      </div>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
