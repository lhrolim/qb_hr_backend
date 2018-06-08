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

require 'rails_helper'

RSpec.describe University, type: :model do

  it { should have_and_belong_to_many(:course) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:logo) }
end
