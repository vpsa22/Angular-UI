declare var window: any;
export class DynamicEnvironment {
    // public getAPITokenURL(): string {
    //     return window.config.API_TOKEN;
    // }
    public getEnvironment(): string {
        return window.config.environment;
    }

    public getHomeApi(): string {
        return window.conig ? window.config.HOME_API : 'http://localhost:9081';
    }


}