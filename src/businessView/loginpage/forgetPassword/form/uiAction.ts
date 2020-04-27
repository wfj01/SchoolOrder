import { message } from 'antd';
import { ForgetPassWordEntity } from '../../../entity';
import { IForgetPassWordFormProps } from './interface';

export class ForgetPassWordFormUiAction{
    /**
     * 表单数据
     */
    private formData:ForgetPassWordEntity;


    /**
     * 当前表单的api接口
     */
    private props:IForgetPassWordFormProps;

    /**
     * 表单验证是否通过
     */
    private isValidated: boolean = false;

    /**
     * 构造方法
     * @param props 
     */
    constructor(props:IForgetPassWordFormProps){

        this.props = props;

        this.validate = this.validate.bind(this); {/*表单验证*/}

        this.validateClient = this.validateClient.bind(this); {/*表单验证*/}

        this.validateServer = this.validateServer.bind(this);

        this.handleForgetPassWord = this.handleForgetPassWord.bind(this);

        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);

    }

    /**
     * 获取Password
     */
    public handleForgetPassWord(event: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalBusinessListViewDoMainStore!.ForgetPassWord = event.target.value;
    }

    public handleConfirmPassword(event: React.ChangeEvent<HTMLInputElement>){
        this.props.GlobalBusinessListViewDoMainStore!.ForgetConfirmPassword = event.target.value;
    }
      
    /**
     * 表单验证
     */
    public validate():{
        /** 
         * 是否验证成功
         */
        isValidated: boolean,
        /** 
         * 表单数据
         */
        formData: any}{

            this.props.form.validateFieldsAndScroll(this.validateClient);

            if (!this.isValidated) {
                return {
                    formData:this.formData,
                    isValidated:this.isValidated
                }
            }

            this.validateServer(this.formData);

            return {
                formData: this.formData,
                isValidated: this.isValidated,
            }


    }



    /**
     * 对表单字段进行基本规则验证的回调函数（客户端基本验证）
     * @param {any} errors 错误信息
     * @param {any} values 表单值
     */
    private validateClient(error:any,values:any){
        this.formData = values;

        if(error){
            message.error("表单填写错误")
            this.isValidated=false;
            return;
        }
            
        this.isValidated=true;

    }

    /**
     * 对表单字段进行服务端验证
     * @param {any} values  表单值
     */
    private validateServer(values:any){

        const {GlobalBusinessListViewDoMainStore}=this.props;

        if (!GlobalBusinessListViewDoMainStore) {
            this.isValidated = true;
            return;
        }

        const otherError = GlobalBusinessListViewDoMainStore.validate(values);
        if (otherError) {
            message.error(otherError);
            this.isValidated = false;
            return;
        }
        this.isValidated = true;
    }
}