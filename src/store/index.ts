import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./slices/couterSlice";
import {premiseReducer} from "./slices/premiseSlice";
import {threadReducer} from "./slices/threadSlice";
// ...

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        premise: premiseReducer,
        thread: threadReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch