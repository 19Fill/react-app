import { useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const posts = [
    {
        id: 1,
        author: "Павел Филиппов",
        title: "Study React for frontend",
        text: "Разобрался с props: теперь компонент Post получает данные снаружи, а не хранит их внутри.",
    },
    {
        id: 2,
        author: "Павел Филиппов",
        title: "Метод map()",
        text: "Массив объектов превращается в список компонентов одной строкой — без копипасты разметки.",
    },
    {
        id: 3,
        author: "Павел Филиппов",
        title: "Форма создания поста",
        text: "Добавил input, textarea и кнопку. Состояние формы живёт в useState, а новый пост уходит наверх через props.",
    },
];

function ProfileCard() {
    const [postList, setPostList] = useState(posts);

    function addPost(title, text) {
        const newPost = {
            id: Date.now(),
            author: "Павел Филиппов",
            title: title,
            text: text,
        };

        setPostList([newPost, ...postList]);
    }

    function deletePost(id) {
        setPostList(postList.filter((post) => post.id !== id));
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">ПФ</div>
                <div className="profile-info">
                    <h2>Павел Филиппов</h2>
                    <p>@pavel · группа 9/4-РПО-23/5</p>
                </div>
            </div>

            <PostForm onAdd={addPost} />

            {postList.length === 0 && (
                <p className="empty">Постов пока нет — напишите первый.</p>
            )}

            {postList.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    onDelete={deletePost}
                />
            ))}
        </section>
    )
}

export default ProfileCard;
