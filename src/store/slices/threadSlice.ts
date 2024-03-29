import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConnectConfig, ConnectType} from "../../types";

export interface ThreadConnectConfig extends ConnectConfig {
    parentThreadId?: string;
}

export const threadSlice = createSlice({
                                           name: "thread",
                                           initialState: {
                                               connector: {
                                                   type: ConnectType.VISION,
                                                   id: null as string | undefined | null,
                                               },
                                               parentThreadId: null
                                           },
                                           reducers: {
                                               setConnector: (
                                                       state,
                                                       action: PayloadAction<ThreadConnectConfig>
                                               ) => {
                                                   state.connector = action.payload;
                                               },
                                               setParentThreadId: (state, action) => {
                                                   state.parentThreadId = action.payload;
                                               }
                                           }
                                       });


// Action creators are generated for each case reducer function
export const {setConnector, setParentThreadId} = threadSlice.actions;

export const threadReducer = threadSlice.reducer;