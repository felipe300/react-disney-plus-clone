import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	recommend: '',
	newDisney: '',
	original: '',
	trending: '',
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.recommend = action.payload.recommend;
			state.newDisney = action.payload.newDisney;
			state.original = action.payload.original;
			state.trending = action.payload.trending;
		},
	},
});

export const { setMovies } = movieSlice.actions;

export const selecRecommend = (state) => state.movie.recommend;
export const selecnNewDisney = (state) => state.movie.newDisney;
export const selecOriginal = (state) => state.movie.original;
export const selecTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
