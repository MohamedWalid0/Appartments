# frozen_string_literal: true

module Api
  module V1
    class ApartmentBlueprint < Blueprinter::Base
      identifier :id
      fields :id, :name, :number_of_rooms, :floor_number, :created_at, :updated_at
    end
  end
end
