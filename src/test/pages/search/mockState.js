export default {
    films: {
        loading: false,
        films: [{ title: 'Title' }],
        page: 1,
        totalPages: 1,
        totalResults: 1,
        query: 'Title'
    },
    film: {
        loading: false,
        film: { title: 'Title'},
        id: 1,
        recId: 1,
        recommendations: [{ title: 'Title' }],
        loadingRec: false
    },
    sortBy: {
        sortValues: [{
            label: 'release date',
            value: 'date'
        }, {
            label: 'rating',
            value: 'rating'
        }],
        activeSortValue: 'date'
    }
};