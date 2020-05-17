import { Form, Input, Modal } from "antd";
import React from "react";
import { IZaixianliuyanProps } from "./interface";

class Zaixianliuyan extends React.Component<IZaixianliuyanProps>{
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="联系我们"
                visible={this.props.handlevisible}
                okText={"确定"}
                cancelText={"取消"}
                width="400px"
                onOk={this.props.handleOk}
                onCancel={this.props.handleCancel}
            >
                < Form>
                    <Form.Item
                        label="联系电话"
                        style={{ width: '300px', display: "flex", justifyContent: "start" }}>
                        <div style={{ display: "block" }}> 15263906353</div>
                    </Form.Item>
                    <Form.Item
                        label="联系QQ"
                        style={{ width: '300px', display: "flex", justifyContent: "start" }}>
                        <div style={{ display: "block" }}>2381918915</div>
                    </Form.Item>
                    <Form.Item
                        label="联系地址"
                        style={{ width: '300px', display: "flex", justifyContent: "start" }}>
                        <div style={{ display: "block" }}>山东省潍坊市奎文区</div>
                    </Form.Item>
                    <Form.Item
                        label="在线留言"
                        style={{ width: '300px', display: "flex", justifyContent: "start" }}>
                        {
                            getFieldDecorator('Telephone', {
                                rules: [
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: "不能为空"
                                    },
                                    {
                                        max: 11,
                                        message: '超出长度',
                                    }
                                ]
                            })(
                                <Input placeholder="请输入你的联系电话" style={{ display: "block" }} />
                            )}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
export default Form.create<IZaixianliuyanProps>()(Zaixianliuyan);