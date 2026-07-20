export declare class UserInfo {
    private _nameElement;
    private _jobElement;
    constructor(selectors: {
        nameSelector: string;
        jobSelector: string;
    });
    getUserInfo(): {
        name: string;
        job: string;
    };
    setUserInfo({ name, job }: {
        name: string;
        job: string;
    }): void;
}
//# sourceMappingURL=UserInfo.d.ts.map