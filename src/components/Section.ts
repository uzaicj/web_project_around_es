export class Section<T>{
  private _renderedItems: T[];
  private _renderer: (item: T) => void;
  private _container: HTMLElement;

  constructor(data: { items: T[]; renderer: (item: T) => void }, selector: string) {
    this._renderedItems = data.items;
    this._renderer = data.renderer;
    this._container = document.querySelector<HTMLElement>(selector)!;
  }

  public renderItems(): void {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  public addItem(element: HTMLElement): void {
    this._container.prepend(element);
  }
  }