import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TopicState = {
    topic: string | undefined;
}

const initialState: TopicState = {
    topic: undefined,
}

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers:{
        resetTopic: (state) => {
            state.topic = undefined;
        },
        setTopicAs: (state, action: PayloadAction<string>) => {
            state.topic = action.payload;
        }
    }
});

export default topicSlice.reducer;
export const { resetTopic, setTopicAs } = topicSlice.actions;