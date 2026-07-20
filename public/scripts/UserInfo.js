export class UserInfo {
    _nameElement;
    _jobElement;
    constructor(selectors) {
        this._nameElement = document.querySelector(selectors.nameSelector);
        this._jobElement = document.querySelector(selectors.jobSelector);
    }
    getUserInfo() {
        return {
            name: this._nameElement.textContent || '',
            job: this._jobElement.textContent || '',
        };
    }
    setUserInfo({ name, job }) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }
}
//# sourceMappingURL=UserInfo.js.map