import { action } from "mobx";
import { ForgetPassWordEntity } from "../loginPage/entity";
import { RegisterPageFormEntity } from "../registerPage/entity";
import { IListViewProps } from "./interface";

export class ListViewUiAction {

     public props: IListViewProps;

     constructor(props: IListViewProps) {
          this.props = props;
          this.SelectOnChange = this.SelectOnChange.bind(this);
          this.RegisterOnClick = this.RegisterOnClick.bind(this);
          this.RegisterPagecancel = this.RegisterPagecancel.bind(this);
          this.RegisterPagesave = this.RegisterPagesave.bind(this);
          this.ForgetPassWordcancel = this.ForgetPassWordcancel.bind(this);
          this.ForgetPassWordsave = this.ForgetPassWordsave.bind(this);
          this.UsernameText = this.UsernameText.bind(this);
          this.PasswordText = this.PasswordText.bind(this);
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
          console.log("this.props.GlobalListViewDoMainStore!.LoginUsername:", this.props.GlobalListViewDoMainStore!.LoginUsername);
     }

     /**
      * 密码
      */
     public PasswordText(event: React.ChangeEvent<HTMLInputElement>) {
          this.props.GlobalListViewDoMainStore!.LoginPassword = event.target.value;
          console.log("this.props.GlobalListViewDoMainStore!.LoginPassword:", this.props.GlobalListViewDoMainStore!.LoginPassword);
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
}