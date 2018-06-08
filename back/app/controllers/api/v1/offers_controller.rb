module Api
  module V1
    class OffersController < ApiController
      include OfferHelper

      PER_PAGE = 10
      
      def index
        @offers = build_search_criteria(params)
        paginate json: @offers, per_page: PER_PAGE
      end

      def show
        offer = Offer
          .includes(:course, :university)
          .joins(:course, :university)
          .find(params[:id])

        json_response(offer, :ok, [:course, :university])
      end
    end
  end
end