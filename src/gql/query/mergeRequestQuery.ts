import {gql} from "@apollo/client";

export const mergeRequestQuery = gql`
    query MergeRequest($where: MergeRequestWhereUniqueInput!) {
        mergeRequest(where: $where) {
            vision {
                id
                premise {
                    id
                }
                title
                activityDate
                description
                createdAt
                thumbnail
                reference {
                    snapshots {
                        sourceUrl
                        s3Url
                        versionId
                    }
                }
                prevVision {
                    title
                    activityDate
                    id
                    description
                    createdAt
                    reference {
                        snapshots {
                            sourceUrl
                            s3Url
                            versionId
                        }
                    }
                    thumbnail
                    draftMode
                }
            }
            title
            description
            id
        }
    }
`;