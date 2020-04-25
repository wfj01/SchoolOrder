import { FormComponentProps } from "antd/lib/form";
import { LoginPageStore } from "./domainStore";

export interface ILoginPageProps extends FormComponentProps   {
    GlobalLoginPageStore?: LoginPageStore;
    Logindisplay?: string;
    RegisterOnClick?: () => void;
    LoginOnClick?: () => void;
    ForgetBtnonClick?: () => void;
    Ifbusiness?:()=>void;
    Usernametext?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    Passwordtext?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}