// import { FormComponentProps } from '@ant-design/compatible/lib/form';
import { Form, Icon, Input, Popconfirm } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Table from 'antd/lib/table';
import { inject, observer } from 'mobx-react';
import 'orid/lib/style/standStyle/oridTablePC.scss';
import React from 'react';
import { ShoppingCartViewEntity } from '../../entity';
import { IShoppingCartTableViewProps } from './interface';
import { ShoppingCartViewTableUiAction } from './uiAction';


@inject("GlobalStepsViewDomainStore","GlobalListViewDoMainStore")
@observer
export class ShoppingCartTableView extends React.Component<IShoppingCartTableViewProps> {

    private uiAction: ShoppingCartViewTableUiAction;

    private columns: any[] = [
        {
            dataIndex: 'dishname',
            key: 'dishname',
            title: '菜名',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'price',
            key: 'price',
            title: '价格(元/500g)',
            width: "10%",
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'windows',
            key: "windows",
            title: '窗口',
            width: '10%',
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'remarks',
            key: 'remarks',
            title: '备注',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            dataIndex: 'number',
            key: "number",
            title: '数量',
            width: '10%',
            editable: true,
            render: (text: any) => <span title={text}>{text}</span>
        },
        {
            key: "action",
            render: (text: any, record:ShoppingCartViewEntity, index: number) => {
                return (
                    <div>
                        <Popconfirm
                            title="确定要删除吗?"
                            onConfirm={this.uiAction.deleteClick.bind(undefined, `delete_${record.id}`)}
                            okText="确认" cancelText="取消" >
                            <a
                                id={`delete_${record.id}`}
                                href={"##"}
                                title="删除"
                            >
                                <Icon type='delete' />
                            </a>
                        </Popconfirm >
                    </div>
                );
            },
            width: "15%",
            title: "操作",
        }
    ]

    constructor(props: IShoppingCartTableViewProps) {
        super(props);
        this.uiAction = new ShoppingCartViewTableUiAction(props);
    }
    public componentDidMount() {
        this.props.GlobalStepsViewDomainStore!.studentid = this.props.GlobalListViewDoMainStore!.LoginUsername;
        this.props.GlobalStepsViewDomainStore!.LoadData();
    }

    public componentWillUnmount(){
        this.props.GlobalStepsViewDomainStore!.ClearData();
    }

    public render() {

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {

            if (!col.editable) {
                return { ...col };
            }
            return {
                ...col,
                onCell: (record: any, rowindex: number) => {
                    return {
                        record,
                        editable: col.editable,
                        dataIndex: col.dataIndex,
                        title: col.title,
                        index: rowindex,
                        handleSave: this.uiAction.handleSave,
                    }
                },
            };
        });
        return (
            <>
                <Table
                    columns={columns}
                    components={components}
                    className={"ori-table ori-table-fixed"}
                    loading={
                        {
                            spinning:this.props.GlobalStepsViewDomainStore!.isLoading,
                            tip:"正在加载中"
                        }
                    }
                    dataSource={this.props.GlobalStepsViewDomainStore!.allReportTableData.slice()}
                    pagination={false}
                    locale={{ emptyText: '暂无 数据' }}
                    rowKey={this.props.GlobalStepsViewDomainStore!.getRowIndex}
                />
            </>
        )
    }
}


const EditableContext = React.createContext({});

const EditableRow = ({ form, index, ...props }: any) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

interface IEditableCellProps extends FormComponentProps {
    // GlobalStepsViewDomainStore?: FirstRestaurantDoMainStore;
    editable: boolean,
    dataIndex: string,
    title: string,
    record: any,
    index: number,
    handleSave: (value: any) => void,
}
interface IEditableCellState {
    editing: boolean;
}

class EditableCell extends React.Component<IEditableCellProps, IEditableCellState> {

    private form: any

    private input: Input;

    constructor(props: IEditableCellProps) {
        super(props);
        this.form = this.props.form;
        this.renderCell = this.renderCell.bind(this);
        this.save = this.save.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.state = {
            editing: false
        }
    }

    public render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                        children
                    )}
            </td>
        );
    }

    public toggleEdit() {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    public async save(e: any) {
        const { record, handleSave } = this.props;

        this.form.validateFields((error: any, values: any) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    public renderCell(form: any) {
        this.form = form;
        const { children, dataIndex, record } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item>
                {form.getFieldDecorator(dataIndex, {
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node!)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
                <div
                    className={"ori-table ori-table-fixed"}
                    // className="editable-cell-value-wrap"
                    // style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                >
                    {children}
                </div>
            );
    };
}