import { action, observable } from "mobx";
import { ForgetPassWordEntity } from "../loginPage/entity";
import { RegisterPageFormEntity } from "../registerPage/entity";
import { IListViewProps } from "./interface";

export class ListViewUiAction {

     public props: IListViewProps;

     /**
      * 商家页面是否显示
      */
     @observable
     public bussinessdisplay:string;

     /**
      * 登录页面是否显示
      */
     @observable
     public Logindisplay:string;

     /**
      * 忘记密码页面是否显示
      */
     @observable
     public ForgetPassWorddisplay:string;

     constructor(props: IListViewProps) {
          this.props = props;
          this.bussinessdisplay = "none";
          this.ForgetPassWorddisplay = "none";
          this.Logindisplay = "block";
          this.SelectOnChange = this.SelectOnChange.bind(this);
          this.RegisterOnClick = this.RegisterOnClick.bind(this);
          this.RegisterPagecancel = this.RegisterPagecancel.bind(this);
          this.RegisterPagesave = this.RegisterPagesave.bind(this);
          this.ForgetPassWordcancel = this.ForgetPassWordcancel.bind(this);
          this.ForgetPassWordsave = this.ForgetPassWordsave.bind(this);
          this.UsernameText = this.UsernameText.bind(this);
          this.PasswordText = this.PasswordText.bind(this);
          this.IfbusinessClick = this.IfbusinessClick.bind(this);
          this.Usernametext = this.Usernametext.bind(this);
     }

     public RegisterOnClick() {
          console.log("q1233:", 123)
     }

     public SelectOnChange(value: any) {
          console.log("value:", value);
     }

     /**
      * 账号
      */
     public UsernameText(event: React.ChangeEvent<HTMLInputElement>) {
          this.props.GlobalListViewDoMainStore!.LoginUsername = event.target.value;
     }

     public Usernametext(event:React.ChangeEvent<HTMLInputElement>){
          this.props.GlobalListViewDoMainStore!.Loginstudioname = event.target.value;
     }

     /**
      * 密码
      */
     public PasswordText(event: React.ChangeEvent<HTMLInputElement>) {
          this.props.GlobalListViewDoMainStore!.LoginPassword = event.target.value;
     }

     /**
      * 取消
      */
     @action
     public RegisterPagecancel() {
          this.props.GlobalListViewDoMainStore!.RegisterPageVisiable = false;
     }

     @action
     public RegisterPagesave(model: RegisterPageFormEntity) {
          this.props.GlobalListViewDoMainStore!.RegisterPageVisiable = false;
          this.props.GlobalListViewDoMainStore!.Adddata(model);
     }

     @action
     public ForgetPassWordcancel() {
          this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable = false;
     }

     @action
     public ForgetPassWordsave(model: ForgetPassWordEntity) {
          this.props.GlobalListViewDoMainStore!.RegisterPageVisiable = false;
          this.props.GlobalListViewDoMainStore!.UpdatePassWord(model);
     }

     @action
     public IfbusinessClick(){
          this.props.GlobalListViewDoMainStore!.display1="none";
          this.Logindisplay = "none";
          this.bussinessdisplay = "block";
     }
}