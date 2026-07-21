export declare class Section<T> {
    private _renderedItems;
    private _renderer;
    private _container;
    constructor(data: {
        items: T[];
        renderer: (item: T) => void;
    }, selector: string);
    renderItems(): void;
    addItem(element: HTMLElement): void;
}
//# sourceMappingURL=Section.d.ts.map