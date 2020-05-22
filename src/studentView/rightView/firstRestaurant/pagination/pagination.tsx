import { Button, Dropdown, Icon, LocaleProvider, Menu, Pagination } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { observer } from 'mobx-react';
import { locale } from 'moment';
import * as React from 'react';
import { FirstRestaurantDoMainStore } from '../domainStore';

interface IPaginationViewProps {
    GlobalFirstDoMainStore: FirstRestaurantDoMainStore
}


@observer
export class PaginationView extends React.Component<IPaginationViewProps>{

    public render() {
        const { allReportTableData, paginationOnChange, paginationPageSizeMenuOnClick, PageSize, PageIndex } = this.props.GlobalFirstDoMainStore;

        const pageSizeMenu = (
            <Menu onClick={paginationPageSizeMenuOnClick} className="ori-pageSizeMenu">
                <Menu.Item key="10"><span className={Number(PageSize) === 10 ? "ori-select-menu-item" : ""} >10</span></Menu.Item>
                <Menu.Item key="20"><span className={Number(PageSize) === 20 ? "ori-select-menu-item" : ""} >20</span></Menu.Item>
                <Menu.Item key="30"><span className={Number(PageSize) === 30 ? "ori-select-menu-item" : ""} >30</span></Menu.Item>
                <Menu.Item key="50"><span className={Number(PageSize) === 50 ? "ori-select-menu-item" : ""} >50</span></Menu.Item>
                <Menu.Item key="100"><span className={Number(PageSize) === 100 ? "ori-select-menu-item" : ""} >100</span></Menu.Item>
                <Menu.Item key="200"><span className={Number(PageSize) === 200 ? "ori-select-menu-item" : ""} >200</span></Menu.Item>
                <Menu.Item key="500"><span className={Number(PageSize) === 500 ? "ori-select-menu-item" : ""} >500</span></Menu.Item>
                <Menu.Item key="1000"><span className={Number(PageSize) === 1000 ? "ori-select-menu-item" : ""} >1000</span></Menu.Item>
                <Menu.Item key="5000"><span className={Number(PageSize) === 5000 ? "ori-select-menu-item" : ""} >5000</span></Menu.Item>
            </Menu>
        );

        return (
            <div className="ori-table-pagination">
                <span style={{ float: 'left', paddingLeft: '2rem' }}>
                    <Icon type="info-circle" style={{ color: '#1890ff' }} />
                    &emsp;共 {allReportTableData.length} 条数据,
                </span>
                <div style={{ float: 'left'}}>
                <Dropdown overlay={pageSizeMenu}  >
                    <Button href="##" size="small" >
                        每页{PageSize}条 <Icon type="caret-up" />
                    </Button>
                </Dropdown>
                </div>
                <LocaleProvider locale={zhCN}>
                    <Pagination

                        defaultCurrent={1}
                        current={PageIndex}
                        simple={true}
                        locale={locale}
                        total={allReportTableData.length}
                        onChange={paginationOnChange}
                        pageSize={PageSize}
                    />
                </LocaleProvider>
            </div>
        );
    }


}