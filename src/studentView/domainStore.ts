import {observable} from 'mobx';

export class MenuViewStore{

    @observable
    public currentPage:string;

    @observable
    public commentvisible : boolean;

    constructor(){
        this.currentPage = "";
        this.commentvisible = false;
    }  
}