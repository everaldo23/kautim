class ChangePriceToDecimal < ActiveRecord::Migration
  def change
    change_column :products, :price, :decimal, precision: 2
    add_index :products, :name
  end
end
