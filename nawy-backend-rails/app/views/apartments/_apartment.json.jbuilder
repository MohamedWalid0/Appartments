json.extract! apartment, :id, :name, :number_of_rooms, :floor_number, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
