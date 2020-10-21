export default class FetchData {

    startUrl = 'https://api.spacexdata.com/v4/';

    getData = async url => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Ошибка ${res.status}. URL: ${res.url}`);
        } 
        return await res.json();
    };

    getRocket = async () => 
        await this.getData(this.startUrl + 'rockets');

    getLaunches = async () => 
        await this.getData(this.startUrl + 'launches/past');

    getCompany = async () => 
        await this.getData(this.startUrl + 'company');

}