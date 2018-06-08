# == Schema Information
#
# Table name: offers
#
#  id                  :integer          not null, primary key
#  uuid                :string
#  description         :string
#  discount_percentage :decimal(, )
#  offered_price       :decimal(, )
#  full_price          :decimal(, )
#  university_id       :integer
#  course_id           :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class OfferSerializer < ActiveModel::Serializer
  attributes :id, :description, :discount_percentage, :offered_price ,:full_price, :university, :course, :created_at
  
  belongs_to :course
  belongs_to :university
  
end
