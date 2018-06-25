export default filters = {
    COURSE: 'O que você quer estudar?',
    UNIVERSITY: 'Em qual faculdade?'
}

// TODO: find a better way to clear the initialState object
export const clearFilters = (filters) => {
    if (!filters.kind) return {page: 0};
    filters.kind.presencial.checked = false
    filters.kind.ead.checked = false
    filters.shift.manha.checked = false
    filters.shift.tarde.checked = false
    filters.shift.noite.checked = false
    filters.level.graduacao.checked = false
    filters.level.pos.checked = false
    return filters
}