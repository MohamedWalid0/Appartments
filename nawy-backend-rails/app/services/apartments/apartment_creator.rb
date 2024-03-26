# frozen_string_literal: true

module Apartments
  class ApartmentCreator
    attr_reader :apartment

    def initialize(params:)
      @apartment = Apartment.new(params)
    end

    def call
      apartment.save
    end
  end
end
