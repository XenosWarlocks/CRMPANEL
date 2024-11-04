import { useModalForm, useSelect } from "@refinedev/antd";
import { type HttpError, useGo } from "@refinedev/core";

import type {
    GetFields,
    GetFieldsFromList,
    GetVariables,
} from "@refinedev/nestjs-query";

import { Form, Input, Modal, Select } from "antd";

import { SelectOptionWithAvatar } from "@/components";
import { USERS_SELECT_QUERY } from "@/graphql/queries";

import type {
    CreateCompanyMutation,
    CreateCompanyMutationVariables,
    UsersSelectQuery,
} from "@/graphql/types";

import { CREATE_COMPANY_MUTATION } from "./queries";
