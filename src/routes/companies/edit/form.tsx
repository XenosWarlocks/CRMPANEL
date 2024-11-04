import { Edit, useForm, useSelect } from "@refinedev/antd";
import type { HttpError } from "@refinedev/core";
import type {
    GetFields,
    GetFieldsFromList,
    GetVariables,
} from "@refinedev/nestjs-query";

import { Form, Input, InputNumber, Select } from "antd";

import { CustomAvatar, SelectOptionWithAvatar } from "@/components";
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import type {
    BusinessType,
    CompanySize,
    Industry,
} from "@/graphql/schema.types";
import type {
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables,
    UsersSelectQuery,
} from "@/graphql/types";
import { getNameInitials } from "@/utilities";

import { UPDATE_COMPANY_MUTATION } from "./queries";
import value from '../../../../../../webapp/urban_wheels/types/image';

export const CompanyForm = () => {
    const {
        saveButtonProps,
        formProps,
        formLoading,
        query: queryResult,
    } = useForm<
        GetFields<UpdateCompanyMutation>,
        HttpError,
        GetVariables<UpdateCompanyMutationVariables>
    >({
        redirect: false,
        meta: {
            gqlMutation: UPDATE_COMPANY_MUTATION,
        },
    });
    const { avatarUrl, name } = queryResult?.data?.data || {};

    const { selectProps: selectPropsUsers, query: queryResultUsers } = useSelect<
        GetFieldsFromList<UsersSelectQuery>
    >({
        resource: "users",
        optionLabel: "name",
        pagination: {
            mode: "off",
        },
        meta: {
            gqlQuery: USERS_SELECT_QUERY,
        },
    });

    return (
        <Edit
            isLoading={formLoading}
            saveButtonProps={saveButtonProps}
            breadcrumb={false}
        >
            <Form {...formProps} layout="vertical">
                <CustomAvatar
                    shape="square"
                    src={avatarUrl}
                    name={getNameInitials(name || "")}
                    style={{
                        width: 96,
                        height: 96,
                        marginBottom: "24px",
                    }}
                />
                <Form.Item
                    label="Sales owner"
                    name="salesOwnerId"
                    initialValue={formProps?.initialValues?.salesOwner?.id}
                >
                    <Select
                        {...selectPropsUsers}
                        options={
                            queryResultUsers.data?.data?.map(({ id, name, avatarUrl }) => ({
                                value: id,
                                label: (
                                    <SelectOptionWithAvatar
                                        name={name}
                                        avatarUrl={avatarUrl ?? undefined}
                                    />
                                ),
                            })) ?? []
                        }
                    />
                </Form.Item>
                <Form.Item label="Company size" name="companySize">
                    <Select options={companySizeOptions} />
                </Form.Item>
                <Form.Item label="Total revenue" name="totalRevenue">
                    <InputNumber
                        autoFocus
                        addonBefore={"$"}
                        min={0}
                        placeholder="0,00"
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    />
                </Form.Item>
                <Form.Item label="Industry" name="industry">
                    <Select options={industryOptions}/>
                </Form.Item>
                <Form.Item label="Business type" name="businessType">
                    <Select options={businessTypeOptions}/>
                </Form.Item>
                <Form.Item label="Country" name="country">
                    <Select options={Country}/>
                </Form.Item>
                <Form.Item label="Website" name="website">
                    <Select options={Website}/>
                </Form.Item>
            </Form>
        </Edit>
    );
};
