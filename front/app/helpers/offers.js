export const buildFilter = (filter) => {
    let filterResult = '?page=' + filter.page
    if (filter.course && filter.course.id) filterResult = filterResult + '&course_id=' + filter.course.id
    if (filter.university && filter.university.id) filterResult  = filterResult+ '&university_id=' + filter.university.id
    for(var i in filter.kind) {
        if (filter.kind[i].checked) filterResult  = filterResult+ '&kind=' + filter.kind[i].title
    }
    for(var i in filter.level) {
        if (filter.level[i].checked) filterResult  = filterResult+ '&level=' + filter.level[i].title
    }
    for(var i in filter.shift) {
        if (filter.shift[i].checked) filterResult  = filterResult+ '&shift=' + filter.shift[i].title
    }
    if (filter.offeredPriceMax) filterResult  = filterResult+ '&offered_price_max=' + filter.offeredPriceMax
    if (filter.discountPercentageMin) filterResult  = filterResult+ '&discount_percentage_min=' + filter.discountPercentageMin
    return filterResult
}