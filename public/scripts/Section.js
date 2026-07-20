export class Section {
    _renderedItems;
    _renderer;
    _container;
    constructor(data, selector) {
        this._renderedItems = data.items;
        this._renderer = data.renderer;
        this._container = document.querySelector(selector);
    }
    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
    addItem(element) {
        this._container.prepend(element);
    }
}
//# sourceMappingURL=Section.js.map