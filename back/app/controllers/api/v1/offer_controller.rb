module Api
  module V1
    class OfferController < ActionController::Base
      include Response
      include ExceptionHandler
      include OfferHelper

      PAGE_SIZE = 10

      def index

        offers = build_search_criteria(params).limit(PAGE_SIZE)

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
  end
end