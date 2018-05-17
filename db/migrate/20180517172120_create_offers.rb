class CreateOffers < ActiveRecord::Migration[5.1]
  def change
    create_table :offers do |t|
      t.string :uuid
      t.string :description
      t.decimal :discount_percentage
      t.decimal :offered_price
      t.decimal :full_price

      t.belongs_to :university, index: true
      t.belongs_to :course, index: true

      t.timestamps
    end
  end
end
