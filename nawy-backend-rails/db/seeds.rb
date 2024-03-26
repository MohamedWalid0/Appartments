# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Apartment.create([
  {
    name: "First apartment",
    number_of_rooms: 3,
    floor_number: 1
  },
  {
    name: "Second apartment",
    number_of_rooms: 5,
    floor_number: 2
  },
  {
    name: "Third apartment",
    number_of_rooms: 2,
    floor_number: 3
  },
  {
    name: "Fourth apartment",
    number_of_rooms: 1,
    floor_number: 5
  },
  {
    name: "Fifth apartment",
    number_of_rooms: 3,
    floor_number: 5
  },  {
    name: "Sixth apartment",
    number_of_rooms: 1,
    floor_number: 4
  }
])