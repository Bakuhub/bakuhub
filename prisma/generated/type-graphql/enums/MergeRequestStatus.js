"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MergeRequestStatus;
(function (MergeRequestStatus) {
    MergeRequestStatus["OPEN"] = "OPEN";
    MergeRequestStatus["CLOSE"] = "CLOSE";
    MergeRequestStatus["MERGED"] = "MERGED";
})(MergeRequestStatus = exports.MergeRequestStatus || (exports.MergeRequestStatus = {}));
TypeGraphQL.registerEnumType(MergeRequestStatus, {
    name: "MergeRequestStatus",
    description: undefined,
});
