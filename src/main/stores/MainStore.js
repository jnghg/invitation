// import { observable, action, toJS, computed, runInAction } from 'mobx';
import { autobind } from 'core-decorators';
import { computed, observable, toJS } from 'mobx';
// import MainRepository from '../repositories/MainRepository';

@autobind
class MainStore {
    
    @observable
    sidebarItems = {
        test: "hello"
    };

    @computed
    get getSidebarItems() {
        return toJS(this.sidebarItems);
    } 

}

export default new MainStore();