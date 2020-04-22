import { inject, observer } from 'mobx-react';
import React from 'react';
import '../App.css';
import Background from '../image/tu5.jpg';
import { ForgetPassWordDialog } from '../loginPage/forgetPassword/dialog/ui';
import LoginPage from '../loginPage/ui';
import { RegisterPageDialog } from '../registerPage/registerpageDialog/ui';
import { MenuView } from '../studentView/listView/ui';
import { IListViewProps } from './interface';
import { ListViewUiAction } from './uiAction';

interface IListViewState {
    display1: string
    display2: string
    display3: string
    Registerdisplay: string
    value: string
    Logindisplay: string
}

/**
 * 判断登录窗口&注册页面
 */
@inject("GlobalListViewDoMainStore")
@observer
export class ListView extends React.Component<IListViewProps, IListViewState>{

    private uiAction: ListViewUiAction;

    // private value: string;
    constructor(props: IListViewProps) {
        super(props);
        this.state = {
            display1: 'block',
            display2: 'none',
            display3: 'none',
            Logindisplay: 'block',
            Registerdisplay: 'none',
            value: ""
        }
        // this.value = "";
        this.uiAction = new ListViewUiAction(props);
        this.LoginBtnOnClick = this.LoginBtnOnClick.bind(this);
        // this.handleOnChange = this.handleOnChange.bind(this);
        this.RegisterOnClick = this.RegisterOnClick.bind(this);
        this.CancelBtnClick = this.CancelBtnClick.bind(this);
        this.ForgetBtnonClick = this.ForgetBtnonClick.bind(this);
        this.ReturnBtnClick = this.ReturnBtnClick.bind(this);
        this.ConfirmrevBtnClick = this.ConfirmrevBtnClick.bind(this);
    }
    public render() {
        return (
            <>
                <div
                    className="web_bg" style={{ backgroundImage: `url(${Background})`, display: this.props.GlobalListViewDoMainStore!.display1 }}>
                    <div style={{ float: 'right', marginRight: '100px', marginTop: '20%' }}>
                        <LoginPage
                            LoginOnClick={this.LoginBtnOnClick}
                            Usernametext = {this.uiAction.UsernameText}
                            Passwordtext = {this.uiAction.PasswordText}
                            RegisterOnClick={this.RegisterOnClick}
                            ForgetBtnonClick={this.ForgetBtnonClick}
                            Logindisplay={this.state.Logindisplay} />
                        <RegisterPageDialog
                            handleCancel={this.uiAction.RegisterPagecancel}
                            handleOk={this.uiAction.RegisterPagesave}
                            RegPagevisiable={this.props.GlobalListViewDoMainStore!.RegisterPageVisiable} />
                    </div>
                </div>
                <div className="wrapper" style={{ display: this.state.display3 }}>
                    <ForgetPassWordDialog
                        handleCancel={this.uiAction.ForgetPassWordcancel}
                        handleOk={this.uiAction.ForgetPassWordsave}
                        RegPagevisiable={this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable} />
                </div>
                <div style={{ display: this.props.GlobalListViewDoMainStore!.display2 }}>
                    < MenuView />
                </div>
            </>
        )
    }

    // private handleOnChange(e: RadioChangeEvent) {
    //     this.value = e.target.value;
    // }


    private ReturnBtnClick() {
        this.setState({
            display3: "none",
            display1: "block"
        })
    }

    private ConfirmrevBtnClick() {
        this.setState({
            display3: "none",
            display2: "block"
        })
    }

    private LoginBtnOnClick() {
        this.props.GlobalListViewDoMainStore!.LoginVerification();
    }

    private RegisterOnClick() {
        this.props.GlobalListViewDoMainStore!.RegisterPageVisiable = true;
    }

    private ForgetBtnonClick() {
        console.log("this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable：",this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable);
       this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable = true; 
       
       console.log("this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable：",this.props.GlobalListViewDoMainStore!.ForgetPassWordVisiable);
    }

    private CancelBtnClick() {
        this.setState({
            Logindisplay: "block",
            Registerdisplay: 'none'
        })
    }
}