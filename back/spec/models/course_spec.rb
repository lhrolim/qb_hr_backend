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

require 'rails_helper'

RSpec.describe Course, type: :model do

  it { should have_and_belong_to_many(:university) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:kind) }
  it { should validate_presence_of(:shift) }
  it { should validate_presence_of(:level) }
end
