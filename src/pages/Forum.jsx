// Forum.jsx
import { useState } from 'react';

export default function Forum() {
  const currentUser = 'You';
  const [posts, setPosts] = useState([
    { _id: 1, user: 'Asha', text: 'What are the benefits of the new irrigation scheme?' },
    { _id: 2, user: 'Ramesh', text: 'Can someone help me apply for crop insurance?' },
    { _id: 3, user: currentUser, text: 'Does anyone know about the soil testing schedule?' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditSave = (id) => {
    setPosts(posts.map(post => post._id === id ? { ...post, text: editText } : post));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8 text-center">Community Forum</h2>

        <div className="space-y-6">
          {posts.map(post => (
            <div key={post._id} className="bg-white p-4 rounded-md border shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-1">{post.user}</p>
              {editingId === post._id ? (
                <>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full border rounded p-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <button className="text-indigo-600 font-medium" onClick={() => handleEditSave(post._id)}>Save</button>
                    <button className="text-gray-500" onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </>
              ) : (
                <p className="text-gray-800 text-base">{post.text}</p>
              )}
              {post.user === currentUser && editingId !== post._id && (
                <div className="text-right text-sm mt-2">
                  <button onClick={() => { setEditingId(post._id); setEditText(post.text); }} className="text-indigo-500 mr-3">Edit</button>
                  <button onClick={() => handleDelete(post._id)} className="text-red-500">Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
