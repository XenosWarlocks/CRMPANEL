export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };

/** All built-in and custom scalars, mapped to their actual values */

export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: string; output: string };
};

export type Audit = {
    action: Scalars["String"]["output"];
    changes: Array<AuditChange>;
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    targetEntity: Scalars["String"]["output"];
    targetId: Scalars["Float"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    user?: Maybe<User>;
};

export type AuditChange = {
    field: Scalars["String"]["output"];
    from?: Maybe<Scalars["String"]["output"]>;
    to?: Maybe<Scalars["String"]["output"]>;
};

export type AuditConnection = {
    /** Array of nodes. */
    nodes: Array<Audit>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type AuditDeleteResponse = {
    action?: Maybe<Scalars["String"]["output"]>;
    changes?: Maybe<Array<AuditChange>>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    targetEntity?: Maybe<Scalars["String"]["output"]>;
    targetId?: Maybe<Scalars["Float"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};
  
export type AuditFilter = {
    action?: InputMaybe<StringFieldComparison>;
    and?: InputMaybe<Array<AuditFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<AuditFilter>>;
    targetEntity?: InputMaybe<StringFieldComparison>;
    targetId?: InputMaybe<NumberFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
    user?: InputMaybe<AuditFilterUserFilter>;
};

export type AuditFilterUserFilter = {
    and?: InputMaybe<Array<AuditFilterUserFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    jobTitle?: InputMaybe<StringFieldComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<AuditFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
    timezone?: InputMaybe<StringFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AuditSort = {
    direction: SortDirection;
    field: AuditSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type AuditSortFields =
  | "action"
  | "createdAt"
  | "id"
  | "targetEntity"
  | "targetId"
  | "updatedAt";

export type AuditSubscriptionFilter = {
    action?: InputMaybe<StringFieldComparison>;
    and?: InputMaybe<Array<AuditSubscriptionFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<AuditSubscriptionFilter>>;
    targetEntity?: InputMaybe<StringFieldComparison>;
    targetId?: InputMaybe<NumberFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AuthResponse = {
    accessToken: Scalars["String"]["output"];
    refreshToken: Scalars["String"]["output"];
    user: User;
};
  
export type BooleanFieldComparison = {
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
};
  
/** Business type */
  export type BusinessType = "B2B" | "B2C" | "B2G";
  
export type CheckListItem = {
    checked: Scalars["Boolean"]["output"];
    title: Scalars["String"]["output"];
};
  
export type ChecklistItemInput = {
    checked: Scalars["Boolean"]["input"];
    title: Scalars["String"]["input"];
};

export type Company = {
    avatarUrl?: Maybe<Scalars["String"]["output"]>;
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    contacts: CompanyContactsConnection;
    contactsAggregate: Array<CompanyContactsAggregateResponse>;
    country?: Maybe<Scalars["String"]["output"]>;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    deals: CompanyDealsConnection;
    dealsAggregate: Array<CompanyDealsAggregateResponse>;
    id: Scalars["ID"]["output"];
    industry?: Maybe<Industry>;
    name: Scalars["String"]["output"];
    notes: CompanyNotesConnection;
    notesAggregate: Array<CompanyNotesAggregateResponse>;
    salesOwner: User;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
    website?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyContactsArgs = {
    filter?: ContactFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactSort>;
};
  
export type CompanyContactsAggregateArgs = {
    filter?: InputMaybe<ContactAggregateFilter>;
};
  
export type CompanyDealsArgs = {
    filter?: DealFilter;
    paging?: OffsetPaging;
    sorting?: Array<DealSort>;
};
  
export type CompanyDealsAggregateArgs = {
    filter?: InputMaybe<DealAggregateFilter>;
};
  
export type CompanyNotesArgs = {
    filter?: CompanyNoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<CompanyNoteSort>;
};

export type CompanyNotesAggregateArgs = {
    filter?: InputMaybe<CompanyNoteAggregateFilter>;
};

export type CompanyAggregateFilter = {
    and?: InputMaybe<Array<CompanyAggregateFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyAggregateFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateGroupBy = {
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    country?: Maybe<Scalars["String"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    industry?: Maybe<Industry>;
    name?: Maybe<Scalars["String"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
    website?: Maybe<Scalars["String"]["output"]>;
};
  
export type CompanyAggregateGroupByCreatedAtArgs = {
    by?: GroupBy;
  };
  
export type CompanyAggregateGroupByUpdatedAtArgs = {
    by?: GroupBy;
};
  
export type CompanyAggregateResponse = {
    avg?: Maybe<CompanyAvgAggregate>;
    count?: Maybe<CompanyCountAggregate>;
    groupBy?: Maybe<CompanyAggregateGroupBy>;
    max?: Maybe<CompanyMaxAggregate>;
    min?: Maybe<CompanyMinAggregate>;
    sum?: Maybe<CompanySumAggregate>;
};

export type CompanyAggregateResponse = {
    avg?: Maybe<CompanyAvgAggregate>;
    count?: Maybe<CompanyCountAggregate>;
    groupBy?: Maybe<CompanyAggregateGroupBy>;
    max?: Maybe<CompanyMaxAggregate>;
    min?: Maybe<CompanyMinAggregate>;
    sum?: Maybe<CompanySumAggregate>;
};
  
export type CompanyAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
    totalRevenue?: Maybe<Scalars["Float"]["output"]>;
};
  
export type CompanyBusinessTypeFilterComparison = {
    eq?: InputMaybe<BusinessType>;
    in?: InputMaybe<Array<BusinessType>>;
    neq?: InputMaybe<BusinessType>;
    notIn?: InputMaybe<Array<BusinessType>>;
};
  
export type CompanyCompanySizeFilterComparison = {
    eq?: InputMaybe<CompanySize>;
    in?: InputMaybe<Array<CompanySize>>;
    neq?: InputMaybe<CompanySize>;
    notIn?: InputMaybe<Array<CompanySize>>;
};
  
export type CompanyConnection = {
    /** Array of nodes. */
    nodes: Array<Company>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};
