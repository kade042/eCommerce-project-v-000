class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title
      t.integer :inventory
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
