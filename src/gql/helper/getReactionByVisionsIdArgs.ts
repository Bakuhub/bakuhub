import {gql} from "@apollo/client";
import {DocumentNode} from "graphql";
import {Reaction} from "../../components/Premise/PremiseDetail";

const reactionByVisionsIdQuery = gql`
    query _count($by: [ReactionOnVisionsScalarFieldEnum!]!, $whereUpvotes: ReactionOnVisionsWhereInput,
        $whereDownvotes: ReactionOnVisionsWhereInput) {
        upVotes: groupByReactionOnVisions (by: $by, where: $whereUpvotes) {
            _count {
                _all
            }
            visionId
        }
        downVotes:groupByReactionOnVisions(by: $by, where: $whereDownvotes) {
            _count {
                _all
            }
            visionId
        }
    }`;


export const getReactionByVisionsIdArgs = (visionIds: string[]): [DocumentNode, { variables: { by: string; whereDownvotes: { AND: ({ visionId: { in: string[] } | { equals: string } } | { reaction: { equals: string } })[] }; whereUpvotes: { AND: ({ visionId: { in: string[] } | { equals: string } } | { reaction: { equals: string } })[] } } }] => [reactionByVisionsIdQuery,
    {
        variables: {
            "by": "visionId",
            whereUpvotes: {
                AND: [
                    {

                        "visionId": visionIds.length > 1 ? {
                            "in": visionIds
                        }:{
                            "equals": visionIds[0]
                        }
                    }, {
                        "reaction": {
                            "equals": Reaction.UPVOTE
                        },
                    }
                ]

            },
            whereDownvotes: {
                AND: [
                    {

                        "visionId": visionIds.length > 1 ? {
                            "in": visionIds
                        }:{
                            "equals": visionIds[0]
                        }
                    }, {
                        "reaction": {
                            "equals": Reaction.DOWNVOTE
                        },
                    }
                ]

            }
        }
    }
];

