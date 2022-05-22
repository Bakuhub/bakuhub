import {LabelType} from "src/types";

export const getCreateOrConnectLabelVariables = ({name, description, color}: LabelType) => (
        {
            label: {
                connectOrCreate: {
                    where: {
                        name
                    },
                    create: {
                        name, color, description
                    }
                }
            }
        }
);