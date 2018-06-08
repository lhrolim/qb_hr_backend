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

class CourseSerializer < ActiveModel::Serializer
  attributes :id,:name ,:kind ,:shift ,:level ,:description ,:max_periods
  has_many :university
end
