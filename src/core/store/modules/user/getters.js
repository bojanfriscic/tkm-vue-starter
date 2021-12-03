const getters = {
    getFullName: (state) => `${state.details.first_name || ''} ${state.details.last_name || ''}`,
    getFirstName: (state) => state.details.first_name || '',
};

export { getters };
