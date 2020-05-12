import { inject, observer } from 'mobx-react';
import React from 'react';
import { ForgetPassWordPage } from '../loginpage/forgetPassword/dialog/ui';
import BudinessLoginPage from '../loginpage/ui';
import { BussinessView } from '../MiddleView/listView/ui';
import { BusinessRegisterPage } from '../registerpage/registerPageDialog/ui';
import { IBusinessListViewProps } from './interface';
import { BusinessListViewUiAction } from './uiAction';

/**
 * 商家页面
 */
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
            <>
            <div style={{display:this.props.GlobalBusinessListViewDoMainStore!.display1, float: 'right', marginRight: '100px', marginTop: '20%' }}>
                <BudinessLoginPage
                    Usernametext={this.uiAction.UsernameText}
                    Passwordtext={this.uiAction.PasswordText}
                    AuthorizationCode={this.uiAction.AuthorizationCode}
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
            <div style={{display:this.props.GlobalBusinessListViewDoMainStore!.display2}}>
                <BussinessView/>
            </div>
            </>
        )
    }
} 