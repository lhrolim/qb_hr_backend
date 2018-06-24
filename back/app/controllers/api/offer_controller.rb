class Api::OfferController < ActionController::Base
  include Response
  include ExceptionHandler
  include OfferHelper

  PAGE_SIZE = 10

  def index
    offset = params.delete "offset"
    search = build_search_criteria(params)
    total = search.length
    offers = search.limit(PAGE_SIZE).offset(offset)

    respond_to do |format|
      format.json do
        json_response({offers: offers, total: total}, ["university", "course"])
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
