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

class UniversitySerializer < ActiveModel::Serializer
  attributes :id, :name, :logo
  has_many :course
end
