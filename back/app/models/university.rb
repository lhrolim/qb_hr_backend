# == Schema Information
#
# Table name: universities
#
#  id          :integer          not null, primary key
#  name        :string
#  logo        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class University < ApplicationRecord
  # model association
  has_and_belongs_to_many :course, join_table: "universities_courses"

  # validation
  validates_presence_of :name, :logo

end
