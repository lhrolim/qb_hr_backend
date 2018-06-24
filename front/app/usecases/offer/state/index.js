export const fieldsInitialState = {
  courses: [],
  universities: [],
  cost: '0',
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
  // course_id: '',
  // discount_percentage_min: '',
  // offered_price_max: '',
  kind: [],
  level: [],
  shift: [],
}
