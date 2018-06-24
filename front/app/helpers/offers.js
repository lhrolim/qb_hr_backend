export const buildFilter = (filter) => {
    console.log('filter', filter)
    let filterResult = '?page=' + filter.page
    if (filter.course && filter.course.id) filterResult = filterResult + '&course_id=' + filter.course.id
    if (filter.university && filter.university.id) filterResult  = filterResult+ '&university_id=' + filter.university.id
    return filterResult
}