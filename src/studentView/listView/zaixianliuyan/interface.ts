import { FormComponentProps } from "antd/lib/form";

export interface IZaixianliuyanProps extends FormComponentProps {
    handlevisible?: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}