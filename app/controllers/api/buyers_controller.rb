class Api::BuyersController < ApplicationController
  def show 
    buyer = Buyer.find(params[:id])
    
    render json: Buyer.get_properties(params[:id], buyer.cities)
  end
end
