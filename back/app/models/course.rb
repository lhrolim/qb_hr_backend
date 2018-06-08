# == Schema Information
#
# Table name: courses
#
#  id          :integer          not null, primary key
#  name        :string
#  kind        :string
#  shift       :string
#  level       :string
#  description :string
#  max_periods :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Course < ApplicationRecord
  # model association
  has_and_belongs_to_many :university, join_table: "universities_courses"
  
  # validation
  validates_presence_of :name, :kind, :shift, :level
end
