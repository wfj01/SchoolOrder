import { inject, observer } from "mobx-react";
import React from "react";
import { VerThr } from "../../../genericComponent/gridBox/verThr/verThr";
import { IStudentListProps } from "./interface";
import { PaginationView } from "./pagination/pagination";
import { StudentListTable } from "./table/ui";

@inject("GlobalStudentListDomainStores")
@observer
export class StudentList extends React.Component<IStudentListProps> {
    public render() {
        return (
            <>
                <VerThr.middle style={{ padding: 15 }}>
                    <StudentListTable />
                </VerThr.middle>
                <VerThr.bottom>
                    <PaginationView GlobalCustomerListDomainStores={this.props.GlobalStudentListDomainStores!} />
                </VerThr.bottom>
            </>
        )
    }
}