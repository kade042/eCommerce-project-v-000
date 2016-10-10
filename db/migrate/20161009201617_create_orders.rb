class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :order_status, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :total

      t.timestamps
    end
  end
end
