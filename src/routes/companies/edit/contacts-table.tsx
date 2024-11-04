import { useParams } from "react-router-dom";

import { FilterDropdown, useTable } from "@refinedev/antd";
import type { GetFieldsFromList } from "@refinedev/nestjs-query";

import {
    MailOutlined,
    PhoneOutlined,
    SearchOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Select, Space, Table } from "antd";

import { ContactStatusTag, CustomAvatar, Text } from "@/components";
import type { CompanyContactsTableQuery } from "@/graphql/types";

import { COMPANY_CONTACTS_TABLE_QUERY } from "./queries";

type Contact = GetFieldsFromList<CompanyContactsTableQuery>;

