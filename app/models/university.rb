class University < ApplicationRecord
  has_and_belongs_to_many :course, join_table: "universities_courses"
end
