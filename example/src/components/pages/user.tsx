import * as React from "react";
import {
    List,
    Table,
    Column,
    EmailField,
    TagField,
    BooleanField,
    DateField,
} from "readmin";

export const UserList = (props: any) => {
    return (
        <List {...props}>
            <Table
                rowKey="id"
                pagination={{
                    pageSize: 20,
                    position: ["bottomCenter"],
                    size: "small",
                }}
            >
                <Column key="id" dataIndex="id" title="ID" />
                <Column
                    key="firstName"
                    dataIndex="firstName"
                    title="First Name"
                />
                <Column key="lastName" dataIndex="lastName" title="Last Name" />
                <Column
                    dataIndex="status"
                    title="Status"
                    key="status"
                    render={(value) => <TagField value={value} />}
                />
                <Column
                    key="email"
                    dataIndex="email"
                    title="Email"
                    render={(value) => <EmailField value={value} />}
                />
                <Column
                    dataIndex="status"
                    title="Status"
                    key="boolean"
                    render={(value) => <BooleanField value={value} />}
                />
                <Column
                    key="birthday"
                    dataIndex="birthday"
                    title="Birthday"
                    render={(value) => <DateField value={value} />}
                />
            </Table>
        </List>
    );
};