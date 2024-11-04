import { useList } from "@refinedev/core";
import type { GetFieldsFromList } from "@refinedev/nestjs-query";

import { UnorderedListOutlined } from "@ant-design/icons";
import { Card, List, Skeleton as AntdSkeleton, Space } from "antd";
import dayjs from "dayjs";

import { CustomAvatar, Text } from "@/components";
import type {
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesDealsQuery,
} from "@/graphql/types";

import {
    DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
    DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY,
} from "./queries";

type Props = { limit?: number };

export const DashboardLatestActivities = ({ limit = 5 }: Props) => {
    const {
        data: audit,
        isLoading: isLoadingAudit,
        isError,
        error,
    } = useList<GetFieldsFromList<DashboardLatestActivitiesAuditsQuery>>({
        resource: "audits",
        pagination: {
            pageSize: limit,
        },
        sorters: [
            {
                field: "createdAt",
                order: "desc",
            },
        ],
        filters: [
            {
                field: "action",
                operator: "in",
                value: ["CREATE", "UPDATE"],
            },
            {
                field: "targetEntity",
                operator: "eq",
                value: "Deal",
            },
        ],
        meta: {
            gqlQuery: DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
        },
    });
}
