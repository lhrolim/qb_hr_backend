export const fieldsInitialState = {
  courses: [],
  universities: [],
  kinds: [
    {id: 'Presencial', name: 'Presencial'},
    {id: 'EAD', name: 'EAD'},
  ],
  levels: [
    {id: 'Graduação', name: 'Graduação'},
    {id: 'Pos-Graduação', name: 'Pos-Graduação'},
  ],
  shifts: [
    {id: 'Manhã', name: 'Manhã'},
    {id: 'Tarde', name: 'Tarde'},
    {id: 'Noite', name: 'Noite'},
    {id: 'Virtual', name: 'Virtual'},
  ],
}

export const filtersInitialState = {
  offset: '0',
  university_id: '',
  course_name: [],
  kind: [],
  level: [],
  shift: [],
  offered_price_max: '',
  discount_percentage_min: '',
}
