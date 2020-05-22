import { inject, observer } from 'mobx-react';
import React from 'react';
import Background from '../../image/beijing.png';
import { ForgetPassWordPage } from '../loginpage/forgetPassword/dialog/ui';
import BudinessLoginPage from '../loginpage/ui';
import { BussinessView } from '../MiddleView/listView/ui';
import { BusinessRegisterPage } from '../registerpage/registerPageDialog/ui';
import './index.css';
import { IBusinessListViewProps } from './interface';
import { BusinessListViewUiAction } from './uiAction';
const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundSize: "100% 100%",
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`,
};

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
                <div style={{ display: this.props.GlobalBusinessListViewDoMainStore!.display1 }}>
                    <div className="web_bg" style={sectionStyle}>
                        <div className='aaaa'>
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
                    </div>
                </div>
                <div style={{ display: this.props.GlobalBusinessListViewDoMainStore!.display2 }}>
                    <BussinessView />
                </div>
            </>
        )
    }
} 