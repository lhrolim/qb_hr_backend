class Api::OfferController < ActionController::Base
  include Response
  include ExceptionHandler
  include OfferHelper

  PAGE_SIZE = 10

  def index

    params.permit("page")
    page = params[:page].to_i

    if page < 1
        page = 1
    end

    offers = build_search_criteria(params).offset(PAGE_SIZE*(page - 1)).limit(PAGE_SIZE)

    respond_to do |format|
      format.json do
        json_response(offers, ["university", "course"])
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
end
