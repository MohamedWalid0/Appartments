module Api
  module V1
    class ApartmentsController < ApplicationController
      skip_before_action :verify_authenticity_token

      before_action :set_apartment, only: %i[ show ]

      # GET /apartments or /apartments.json
      def index
        apartments = Apartment.all
        render json: serialize(apartments)
      end

      # GET /apartments/1 or /apartments/1.json
      def show
        render json: serialize(apartment)
      end

      # POST /apartments or /apartments.json
      def create
        creator = Apartments::ApartmentCreator.new(params: apartment_params)
        apartment = creator.apartment

        if creator.call
          render json: serialize(apartment), status: :created
        else
          render json: {errors: apartment.errors}, status: :unprocessable_entity
        end
      end

      private

      attr_reader :apartment

      def set_apartment
        @apartment = Apartment.find(params[:id])
      end

      def apartment_params
        params.require(:apartment).permit(:name, :number_of_rooms, :floor_number)
      end

      def serialize(data)
        Api::V1::ApartmentBlueprint.render(data)
      end
    end
  end
end