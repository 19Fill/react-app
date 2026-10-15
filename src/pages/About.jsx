function About() {
    const stack = [
        { name: "React 19", note: "компоненты, props, состояние через useState" },
        { name: "React Router", note: "переходы между страницами без перезагрузки" },
        { name: "Vite", note: "сборка и дев-сервер" },
        { name: "CSS", note: "ручная вёрстка без UI-библиотек" },
    ];

    return (
        <section className="page about">
            <div className="about-hero">
                <h2>О проекте</h2>
                <p>
                    SOCIAL NETWORK — учебная социальная сеть, которую мы собираем
                    на занятиях по React. Здесь можно написать пост, опубликовать
                    его и удалить, а страницы переключаются без перезагрузки сайта.
                </p>
            </div>

            <h3>Что внутри</h3>
            <div className="about-grid">
                {stack.map((item) => (
                    <div className="about-card" key={item.name}>
                        <h4>{item.name}</h4>
                        <p>{item.note}</p>
                    </div>
                ))}
            </div>

            <h3>Как это делалось</h3>
            <ol className="about-steps">
                <li>Вынесли пост в отдельный компонент и передали данные через props.</li>
                <li>Сделали массив постов и собрали список методом map().</li>
                <li>Добавили форму с input, textarea и кнопкой публикации.</li>
                <li>Стилизовали форму и добавили кнопку удаления поста.</li>
                <li>Разложили экраны по папке pages и связали их React Router.</li>
            </ol>

            <p className="about-author">Проект ведёт Павел Филиппов, группа 9/4-РПО-23/5</p>
        </section>
    )
}

export default About;
