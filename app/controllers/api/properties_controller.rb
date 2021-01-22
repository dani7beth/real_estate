class Api::PropertiesController < ApplicationController
  before_action :set_page

  def index
    properties = Property.page(@page).available
    render json: { data: properties, total_pages: properties.total_pages }
  end

  def city_list
    render json: Address.distinct.pluck(:city)
  end

  def city
   render json: Property.by_city(params[:city])
  end

  def set_page
    @page = params[:page] || 1
  end
end
