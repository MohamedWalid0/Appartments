require 'rails_helper'

RSpec.describe Apartment do
  subject(:apartment) { build(:apartment) }

  describe 'factory' do
    it 'has a valid record' do
      expect(apartment).to be_valid
    end
  end

  describe 'validations' do
    describe 'name' do
      it { is_expected.to validate_presence_of(:name) }
    end

    describe 'floor_number' do
      it { is_expected.to validate_presence_of(:floor_number) }
      it { is_expected.to validate_numericality_of(:floor_number).is_greater_than_or_equal_to(1).only_integer }
    end

    describe 'number_of_rooms' do
      it { is_expected.to validate_presence_of(:number_of_rooms) }
      it { is_expected.to validate_numericality_of(:number_of_rooms).is_greater_than_or_equal_to(1).only_integer }
    end
  end
end
