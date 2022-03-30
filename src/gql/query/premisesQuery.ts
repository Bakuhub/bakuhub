import {gql} from "@apollo/client";

export const premisesQuery = gql`
    query Premises($where: VisionWhereInput) {
        premises {
            id
            vision(where: $where) {
                title
                description
                activityDate
                id
                reference {
                    snapshots{
                        id
                        versionId
                        sourceUrl
                        s3Url
                    }
                }
                createdAt
                thumbnail
                draftMode
                author {
                    id
                    image
                    email
                    name
                }
            }

        }
    }
`;