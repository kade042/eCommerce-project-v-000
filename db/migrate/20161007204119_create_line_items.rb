class CreateLineItems < ActiveRecord::Migration[5.0]
  def change
    create_table :line_items do |t|
      t.integer :quantity, default: 1
      t.integer :unit_price
      t.integer :sub_total
      t.references :item, foreign_key: true

      t.timestamps
    end
  end
end
