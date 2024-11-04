import React from "react";
import {
    CreateButton,
    DeleteButton,
    EditButton,
    FilterDropdown,
    List,
    useTable,
} from "@refinedev/antd";

import { getDefaultFilter, type HttpError, useGo } from "@refinedev/core";
import type { GetFieldsFromList } from "@refinedev/nestjs-query";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Table } from "antd";

import { CustomAvatar, PaginationTotal, Text } from "@/components";
import type { CompaniesListQuery } from "@/graphql/types";
import { currencyNumber } from "@/utilities";

import { COMPANIES_LIST_QUERY } from "./queries";

type Company = GetFieldsFromList<CompaniesListQuery>;
