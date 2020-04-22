import { ILoginPageProps } from "./interface";

export class LoginpageUiAction {
    private props:ILoginPageProps;
    constructor(props:ILoginPageProps){
        this.props = props;
        this.LoginSelectOnChange = this.LoginSelectOnChange.bind(this);
        this.RegisterSelectOnChange = this.RegisterSelectOnChange.bind(this);
        this.Usernametext = this.Usernametext.bind(this);
        this.Passwordtext = this.Passwordtext.bind(this);
    }


    /**
     * 登录界面-Username
     */
    public Usernametext(e: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalLoginPageStore!.LoginUsername = e.currentTarget.value;
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