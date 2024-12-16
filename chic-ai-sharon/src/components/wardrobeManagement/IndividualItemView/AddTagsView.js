import './AddTags.css';

import { useState } from 'react';

function AddTagsView({ itemId, onTagsAdded }) {
  const [tag, setTag] = useState('');
  const handleAddTag = async () => {
  if (tag) {
    try {
      // Send POST request to the backend to add the new tag
      const response = await fetch(`http://localhost:8000/api/outfits/wardrobe/${itemId}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTags: [tag] }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(`New tag added: ${tag}`);
        setTag(''); // Reset the tag input field
        onTagsAdded(); // Notify parent component to refresh the tags
      } else {
        alert(data.message || 'Failed to add tag');
      }
    } catch (error) {
      console.error('Error adding tag:', error);
      alert('An error occurred while adding the tag.');
    }
  } else {
    alert('Tag cannot be empty!');
  }
};

  return (
    <div className="add-tag-container">
      <input
        type="text"
        className="add-tag-input"
        placeholder="Enter Tag Name"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button className="add-tag-button" onClick={handleAddTag}>
        Add
      </button>
    </div>
  );
}

export default AddTagsView;
