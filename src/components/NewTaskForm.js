import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // State for the task description input
  const [category, setCategory] = useState(categories.find(cat => cat !== "All") || (categories.length > 0 ? categories[0] : "")); // State for the selected category

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text && category) {
      const newTask = {
        text: text,
        category: category,
      };
      onTaskFormSubmit(newTask); // Call the callback to add the task in App
      setText(""); // Reset the text input
      setCategory(categories.find(cat => cat !== "All") || (categories.length > 0 ? categories[0] : "")); // Reset the category to the first non-"All" category or the first if "All" is the only one
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="text">Details</label>
      <input
        type="text"
        id="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update text state on input change
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)} // Update category state on select change
      >
        {categories
          .filter((cat) => cat !== "All") // Exclude "All" from the options
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;