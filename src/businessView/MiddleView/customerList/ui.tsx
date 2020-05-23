import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../genericComponent/gridBox/verThr/verThr";
import { ICustomerListProps } from "./interface";
import { PaginationView } from "./pagination/pagination";
import { CustomerListTable } from "./table/ui";

@inject("GlobalCustomerListDomainStores")
@observer
export class CustomerList extends React.Component<ICustomerListProps> {
    public render() {
        return (
            <>
                <VerThr.middle style={{ padding: 15 }}>
                    <CustomerListTable />
                </VerThr.middle>
                <VerThr.bottom style={{ textAlign: "right", paddingRight: "12px", width: '450px' }}>
                    <PaginationView GlobalCustomerListDomainStores={this.props.GlobalCustomerListDomainStores!} />
                </VerThr.bottom>
            </>
        )
    }
}