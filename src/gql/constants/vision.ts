export const visionOverviewGqlTemplate = `
            id
            title
            activityDate
            thumbnail
            author {
                id
                name
                email
                image
            }
            description
            createdAt
            premiseId
            authorId
            prevVisionId
`;