"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SnapshotScalarFieldEnum;
(function (SnapshotScalarFieldEnum) {
    SnapshotScalarFieldEnum["id"] = "id";
    SnapshotScalarFieldEnum["createdAt"] = "createdAt";
    SnapshotScalarFieldEnum["updatedAt"] = "updatedAt";
    SnapshotScalarFieldEnum["versionId"] = "versionId";
    SnapshotScalarFieldEnum["s3Url"] = "s3Url";
    SnapshotScalarFieldEnum["sourceUrl"] = "sourceUrl";
    SnapshotScalarFieldEnum["caption"] = "caption";
})(SnapshotScalarFieldEnum = exports.SnapshotScalarFieldEnum || (exports.SnapshotScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SnapshotScalarFieldEnum, {
    name: "SnapshotScalarFieldEnum",
    description: undefined,
});
