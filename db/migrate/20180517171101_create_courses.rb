class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :kind
      t.string :shift
      t.string :level
      t.string :description
      t.integer :max_periods

      t.timestamps
    end

    create_table :universities_courses, id: false do |t|
      t.belongs_to :university, index: true
      t.belongs_to :course, index: true
    end
  end
end
