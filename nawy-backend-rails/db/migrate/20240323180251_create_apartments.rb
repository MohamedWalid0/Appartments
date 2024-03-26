class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :name
      t.integer :number_of_rooms
      t.integer :floor_number

      t.timestamps
    end
  end
end
