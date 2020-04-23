import { message } from "antd";
import { IFromViewProps } from "./interface";
import { ManageGoodsEntity } from "../../entity";

export class FromViewUiAction{
    /**
     * 表单数据
     */
    private formData:ManageGoodsEntity;


    /**
     * 当前表单的api接口
     */
    private props:IFromViewProps;

    /**
     * 表单验证是否通过
     */
    private isValidated: boolean = false;

    /**
     * 构造方法
     * @param props 
     */
    constructor(props:IFromViewProps){

        this.props = props;

        this.validate = this.validate.bind(this); {/*表单验证*/}

        this.validateClient = this.validateClient.bind(this); {/*表单验证*/}

        this.validateServer = this.validateServer.bind(this);

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

        const {GlobalManageGoodsDomainStore}=this.props;

        if (!GlobalManageGoodsDomainStore) {
            this.isValidated = true;
            return;
        }

        const otherError = GlobalManageGoodsDomainStore.validate(values);
        if (otherError) {
            message.error(otherError);
            this.isValidated = false;
            return;
        }
        this.isValidated = true;
    }
}