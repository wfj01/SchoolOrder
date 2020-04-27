import { FormComponentProps } from "antd/lib/form";

export interface IBudinessLoginPageProps extends FormComponentProps{
    RegisterOnClick?: () => void;
    LoginOnClick?: () => void;
    ForgetBtnonClick?: () => void;
    Usernametext?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    Passwordtext?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
    AuthorizationCode?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}