class Apartment < ApplicationRecord

  # Validations
  validates :name, :number_of_rooms, :floor_number, presence: true
  validates :number_of_rooms, :floor_number, numericality: { only_integer: true, greater_than_or_equal_to: 1 }

end
