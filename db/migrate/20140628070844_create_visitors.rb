class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.string :email, required: true
      t.string :position, required: true
      t.string :company, required: true
      t.timestamps
    end
  end
end
