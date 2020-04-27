import { inject, observer } from 'mobx-react';
import React from 'react';
import { ForgetPassWordPage } from '../loginpage/forgetPassword/dialog/ui';
import BudinessLoginPage from '../loginpage/ui';
import { BusinessRegisterPage } from '../registerpage/registerPageDialog/ui';
import { IBusinessListViewProps } from './interface';
import { BusinessListViewUiAction } from './uiAction';

@inject("GlobalBusinessListViewDoMainStore")
@observer
export class BusinessListView extends React.Component<IBusinessListViewProps> {

    private uiAction: BusinessListViewUiAction;

    constructor(props: IBusinessListViewProps) {
        super(props);
        this.uiAction = new BusinessListViewUiAction(props);
    }
    public render() {
        return (
            <div>
                <BudinessLoginPage
                    Usernametext={this.uiAction.UsernameText}
                    Passwordtext={this.uiAction.PasswordText}
                    LoginOnClick={this.uiAction.LoginBtnOnClick}
                    RegisterOnClick={this.uiAction.RegisterOnClick}
                    ForgetBtnonClick={this.uiAction.ForgetBtnonClick}
                />
                <BusinessRegisterPage
                    handleCancel={this.uiAction.RegisterPagecancel}
                    handleOk={this.uiAction.RegisterPagesave}
                    RegisterPagevisiable={this.props.GlobalBusinessListViewDoMainStore!.RegisterPageVisiable}
                />
                <ForgetPassWordPage
                    handleCancel={this.uiAction.ForgetPassPagecancel}
                    handleOk={this.uiAction.ForgetPassPagesave}
                    forgetPasswordVisible={this.props.GlobalBusinessListViewDoMainStore!.forgetPasswordVisible}
                />
            </div>
        )
    }
} 