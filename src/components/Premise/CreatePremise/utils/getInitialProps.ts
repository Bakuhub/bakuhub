import {get} from "lodash";
import {Premise} from "../../../../../prisma/generated/type-graphql";

export const getInitialProps = (premise: Premise, propertyName: string) => get(premise, `vision[0].${propertyName}`, "");