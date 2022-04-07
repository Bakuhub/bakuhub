"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Reaction;
(function (Reaction) {
    Reaction["LIKE"] = "LIKE";
    Reaction["UPVOTE"] = "UPVOTE";
    Reaction["DOWNVOTE"] = "DOWNVOTE";
})(Reaction = exports.Reaction || (exports.Reaction = {}));
TypeGraphQL.registerEnumType(Reaction, {
    name: "Reaction",
    description: undefined,
});
