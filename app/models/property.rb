class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

  #select properties.id, price, beds, baths, sq_ft, a.first_name, a.last_name, a.email, a.id as agent_id, ad.street, ad.city, ad.zip from properties
# inner join agents a ON a.id = properties.agent_id
# inner join addresses ad ON ad.property_id = properties.id
# where properties.sold <> true
# order by a.id
  def self.available
    select('properties.id, price, beds, baths, sq_ft, a.first_name, a.last_name, a.email, a.id as agent_id, ad.street, ad.city, ad.zip')
    .joins('inner join agents a ON a.id = properties.agent_id 
    inner join addresses ad ON ad.property_id = properties.id')
    .where('properties.sold <> true')
    .order('a.id')
  end

  def self.by_city(city)
    select('properties.id, beds, baths, sq_ft, price, sold, city, zip')
    .joins('inner join addresses a ON a.property_id = properties.id')
    .where('lower(a.city) = ? and sold <> true', city.downcase)
  end

end
