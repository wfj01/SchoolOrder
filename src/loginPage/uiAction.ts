import { ILoginPageProps } from "./interface";

export class LoginpageUiAction {
    public isChecked:boolean;
    private props:ILoginPageProps;

    constructor(props:ILoginPageProps){
        this.props = props;
        this.isChecked = false;
        this.LoginSelectOnChange = this.LoginSelectOnChange.bind(this);
        this.RegisterSelectOnChange = this.RegisterSelectOnChange.bind(this);
        this.Usernametext = this.Usernametext.bind(this);
        this.Passwordtext = this.Passwordtext.bind(this);
        this.eyeClick = this.eyeClick.bind(this);
    }

    /**
     * 控制密码是否显示
     */
    public eyeClick(){

        if (this.isChecked === true) {
            this.isChecked =false
        } else {
            this.isChecked =true
        }
        console.log("this.isChecked：",this.isChecked);
    }

    /**
     * 登录界面-Username
     */
    public Usernametext(e: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalLoginPageStore!.Loginstudioname = e.currentTarget.value;
    }

    /**
     * 登录界面-Password
     */
    public Passwordtext(e: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalLoginPageStore!.LoginPassword = e.target.value;
    }

    public LoginSelectOnChange(value:any){
        console.log(value);
    }
    public RegisterSelectOnChange(value:any){
        console.log(value);
    }
}