class Course < ApplicationRecord
  has_and_belongs_to_many :university, join_table: "universities_courses"
end
