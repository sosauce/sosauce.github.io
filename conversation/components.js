class ConversationHeader extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name')
        this.innerHTML = `
            <header>
                <a onclick="history.back()">
                    <img src="/resources/back.svg" alt="Back" class="iconButton">
                </a>
                <div class="avatar">${name.charAt(0)}</div>
                <p class="name">${name}</p>
            </header>`;
    }
}

customElements.define('convo-header', ConversationHeader)
