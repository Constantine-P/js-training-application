export function renderPost(post, options = {withButton: true}) {
    const tag = post.type === "news"
        ? `<li class="tag tag-blue tag-rounded">Новость</li>`
        : `<li class="tag tag-rounded">Заметка</li>`;

    const button = (JSON.parse(localStorage.getItem("favorites") || "[]").includes(post.id))
        ? `<button class='button-round button-small button-danger' data-id="${post.id}" data-title="${post.title}">Удалить</button>`
        : `<button class='button-round button-small button-primary' data-id="${post.id}" data-title="${post.title}">Сохранить</button>`;

    return `<div class="panel">
                <div class="panel-head">
                    <p class="panel-title">${post.title}</p>
                    <ul class="tags">
                        ${tag}
                    </ul>
                </div>
                <div class="panel-body">
                    <p class="multi-line">${post.fulltext}</p>
                </div>
                <div class="panel-footer w-panel-footer">
                    <small>${post.date}</small>
                    ${options.withButton !== false ? button : ""}
                </div>
            </div>`;
}