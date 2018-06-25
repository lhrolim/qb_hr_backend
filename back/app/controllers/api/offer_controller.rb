class Api::OfferController < ActionController::Base
  include Response
  include ExceptionHandler
  include OfferHelper

  PAGE_SIZE = 10

  def index
    sleep(1)

    offers = build_search_criteria(offer_list_parameters)
  
    start_index = params[:page].to_i * PAGE_SIZE
    total_size = offers.length
    offers = offers.drop(start_index).take(PAGE_SIZE)
    filtered_size = offers.length

    next_page = params[:page].to_i + 1
    if((next_page * PAGE_SIZE) >= total_size) then
      next_page = nil
    end

    respond_to do |format|
      format.json do
        json_response({
          offers: offers.as_json(:include => ["university", "course"]),
          filtered_size: filtered_size,
          total_size: total_size,
          next_page: next_page
        })
      end
    end
  end

  def show
    offer = Offer
      .includes(:course, :university)
      .joins(:course, :university)
      .find(params[:id])
    json_response(offer, ["course", "university"])
  end

  private 
    def offer_list_parameters
      params.permit(:discount_percentage_min, :offered_price_max, :page, :shift => [], :kind => [], :level => [],:university_id => [], :subject_id => [])
    end
end
