export class UserInfo {
  private _nameElement: HTMLElement;
  private _jobElement: HTMLElement;

  constructor(selectors: { nameSelector: string; jobSelector: string }) {
  this._nameElement = document.querySelector<HTMLElement>(selectors.nameSelector)!;
  this._jobElement = document.querySelector<HTMLElement>(selectors.jobSelector)!;
}

  public getUserInfo(): { name: string; job: string } {
    return {
      name: this._nameElement.textContent || '',
      job: this._jobElement.textContent || '',
    };
  }

  public setUserInfo({ name, job }: { name: string; job: string }): void {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}