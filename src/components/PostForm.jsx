import { useState } from "react";

function PostForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (title.trim() === "" || text.trim() === "") {
            return;
        }

        onAdd(title, text);
        setTitle("");
        setText("");
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h3>Новый пост</h3>

            <input
                type="text"
                className="post-form-input"
                placeholder="Заголовок поста"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                className="post-form-textarea"
                placeholder="О чём расскажете?"
                rows="4"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />

            <button type="submit" className="post-form-button">
                Опубликовать
            </button>
        </form>
    )
}

export default PostForm;
