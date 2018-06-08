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

require 'rails_helper'

RSpec.describe Offer, type: :model do

  it { should belong_to(:course) }
  it { should belong_to(:university) }

  it { should validate_presence_of(:offered_price) }
  it { should validate_presence_of(:full_price) }
  it { should validate_presence_of(:university) }
  it { should validate_presence_of(:course) }
end
