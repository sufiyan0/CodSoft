import { createSlice, nanoid } from "@reduxjs/toolkit";
import { client } from "../../../../../sanity/lib/client";

interface job {
  _id: string;
  author: [];
  jobTitle: string;
  description: string;
  role: string;
  _type: string;
}

const initialState: any = {
  data: [],
  selectedJob: [],
};

const getClient = async () => {
  const res = await client.fetch(
    `*[_type == "jobs"]{
              _id,
              author,
              jobTitle,
              description,
              role,
              _type
            }`
  );
  // .then((res) => res.json())

  return res;
};

export const jobdataSlice = createSlice({
  name: "jobDetails",
  initialState: initialState,
  reducers: {
    getdata: (state, action) =>  () => {
      state.data = action.payload;
    },

    jobdata: (state, action) => {
      state.selectedJob = action.payload;      
      
    }
  },
});

export const { getdata  , jobdata} = jobdataSlice.actions;
export default jobdataSlice.reducer;
