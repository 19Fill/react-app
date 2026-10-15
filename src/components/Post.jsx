import Actions from "./Actions";

function Post({ id, author, title, text, onDelete }) {
    return (
        <article className="post">
            <button
                className="post-delete"
                title="Удалить пост"
                onClick={() => onDelete(id)}
            >
                ✕
            </button>

            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            <p className="post-author">Автор: {author}</p>

            <Actions />
        </article>
    )
}

export default Post;
